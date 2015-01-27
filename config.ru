require 'bundler'
Bundler.require(:default)

require './controllers/application_controller.rb'



map('/'){ run ApplicationController }