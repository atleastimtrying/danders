require 'rubygems'
require 'sinatra'
require './app'

Bundler.require(:default, ENV['RACK_ENV']) if defined?(Bundler)
run Sinatra::Application
