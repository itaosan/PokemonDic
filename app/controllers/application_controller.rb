# coding: utf-8
class ApplicationController < ActionController::Base
  protect_from_forgery

  helper_method :mobile_device?
  def mobile_device?
    user_agent = request.user_agent
    user_agent =~ /Mobile|webOS/
  end
end
