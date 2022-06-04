require 'rails_helper'

RSpec.describe "Homes", type: :request do
  describe "#index" do
    it "200レスポンスは返ってきてるか" do
      get "http://localhost:3000/"
      expect(response).to have_http_status "200"
    end
  end
end
