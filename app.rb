GITHUB_USERS_API = "https://api.github.com/users/"
GITHUB_REPOS_API = "https://api.github.com/users/"

get '/' do
  file_path = File.join(File.dirname(__FILE__), 'public', "index.html") 
	content_type File.extname(file_path)
	File.read(file_path)
end

get %r{/public/(.+)} do |url|
	file_path = File.join(File.dirname(__FILE__),'public', "#{url}") 
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
	person = Person.new

	# get base user
	github_user = HTTParty.get("#{GITHUB_USERS_API}#{username}")
	github_followers = HTTParty.get("#{GITHUB_USERS_API}#{username}/followers")
	github_repos = HTTParty.get("#{GITHUB_REPOS_API}#{username}/repos")
	person.name = github_user["name"]
	person.repo_count = github_user["public_repo_count"]

	# followers
	person.followers = github_followers

	languages = []

	# add repos and languages
	github_repos.each do |repo|
		person.repos << repo["name"]
		languages << repo["language"]
	end

	person.languages = get_lang_distribution languages

	# return
	person

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
		lang_count[lang] = count * factor
	end

	lang_count

end
