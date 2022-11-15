source "https://rubygems.org"

gem "jekyll-github-metadata"
gem "jekyll-paginate"
gem "jekyll-compose"
gem "jekyll-feed"
gem "github-pages", group: :jekyll_plugins

install_if -> { RUBY_PLATFORM =~ %r!mingw|mswin|java! } do
  gem "tzinfo", "~> 1.2"
  gem "tzinfo-data"
end

gem "wdm", "~> 0.1.1", :install_if => Gem.win_platform?

gem "webrick", "~> 1.7"
