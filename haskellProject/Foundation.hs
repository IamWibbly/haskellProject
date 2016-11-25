{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE TemplateHaskell   #-}
{-# LANGUAGE TypeFamilies      #-}
{-# LANGUAGE ViewPatterns      #-}
module Foundation where

import Yesod.Core

data App = App
{-#
data Estab = Estab
    { nome  :: Text
    , local :: Text
    } deriving (Show)
#-}

mkYesodData "App" $(parseRoutesFile "routes")

instance Yesod App