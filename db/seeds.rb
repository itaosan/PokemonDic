# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
# coding: utf-8
require 'csv'

# データ登録
header_row = []
first = true
CSV.foreach("resources/pokemon.csv", :encoding => 'UTF-8'){|row|
  if first
    header_row = row
    first = false
    next
  end

  attrs = {}
  header_row.each_with_index do |key,n|
    attrs[key.to_sym] = row[n]
  end

  poke = Pokemon.new(attrs)
  unless Pokemon.find_by_name(poke.name)
    poke.save!
    puts "pokemon created: #{poke.name}(#{poke.no})"
  else
    puts "pokemon already exists, skip!: #{poke.name}"
  end
}