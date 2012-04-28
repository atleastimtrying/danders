GITHUB_USERS_API = "http://github.com/api/v2/json/user/show/"
GITHUB_REPOS_API = "http://github.com/api/v2/json/repos/show/"

get '/' do
  file_path = File.join(File.dirname(__FILE__), '..', 'public', "index.html") 
	content_type File.extname(file_path)
	File.read(file_path)
end

get %r{/public/(.+)} do |url|
	file_path = File.join(File.dirname(__FILE__), '..', 'public', "#{url}") 
	content_type File.extname(file_path)
	File.read(file_path)
end

# starting point for people
get %r{/people/([\w]+).json} do |person|
  content_type :json
 	user = get_user person

 	user.to_json
end

# starting point for people
get %r{/people/([\w]+).txt} do |person|
  content_type :text
 	user = get_user person

 	user.inspect
end

def get_user(username)

	# create person
	p = Person.new

	# get base user
	github_user = HTTParty.get("#{GITHUB_USERS_API}#{username}")["user"]
	github_followers = HTTParty.get("#{GITHUB_USERS_API}#{username}/followers")["users"]
	github_repos = HTTParty.get("#{GITHUB_REPOS_API}#{username}")["repositories"]

	p.name = github_user["name"]
	p.repo_count = github_user["public_repo_count"]

	# followers
	p.followers = github_followers

	languages = []

	# add repos and languages
	github_repos.each do |repo|
		p.repos << repo["name"]
		languages << repo["language"]
	end

	p.languages = get_lang_distribution languages

	# return
	p

end

def get_lang_distribution(lang_array)

	lang_count = {}
	total = 0

	lang_array.compact!

	factor = 100.to_f / lang_array.length

	lang_array.each do |lang|
		lang_count[lang] = 0 if not lang_count.include?(lang)
		lang_count[lang] = lang_count[lang] + 1
	end

	lang_count.each do |lang, count|
		puts count
		lang_count[lang] = count * factor
	end

	lang_count

end
