require 'rake'
require "sinatra/activerecord/rake"
require ::File.expand_path('../config/environment', __FILE__)

Rake::Task["db:create"].clear
Rake::Task["db:drop"].clear

# NOTE: Assumes SQLite3 DB
desc "create the database"
task "db:create" do
  touch 'db/db.sqlite3'
end

desc "drop the database"
task "db:drop" do
  rm_f 'db/db.sqlite3'
end

desc 'Retrieves the current schema version number'
task "db:version" do
  puts "Current version: #{ActiveRecord::Migrator.current_version}"
end

desc 'Populates the DB'
task "db:populate" do
  Contact.create(firstname: "Joe", lastname: "Joseph", email: "joe@gmail.com")
  Contact.create(firstname: "Sally", lastname: "Doe", email: "sally@gmail.com")
  Contact.create(firstname: "Pete", lastname: "Smith", email: "pete@gmail.com")
  Contact.create(firstname: "Doris", lastname: "Bell", email: "doris@gmail.com")
end