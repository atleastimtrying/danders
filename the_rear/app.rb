

get '/' do
  file_path = File.join(File.dirname(__FILE__), '..', 'public', "index.html") 
	content_type File.extname(file_path)
	File.read(file_path)
end

get %r{/public/(.+)} do |c|
	file_path = File.join(File.dirname(__FILE__), '..', 'public', "#{c}") 
	content_type File.extname(file_path)
	File.read(file_path)
end

get %r{/people/([\w]+).json} do |c|
  content_type :json
  { :key1 => "#{c}", :key2 => 'value2' }.to_json
end