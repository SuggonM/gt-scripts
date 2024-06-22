#!/system/bin/sh

# favorable execution environment: inside an ADB shell

# this script effectively converts the in-game
# gen-chat into degen-chat by sending 5 surprise
# shikanokonokonokokoshitantan's every minute

# good luck on your path to degeneracy ( •̀ ω •́ )✧
# and thank me later UwU

# Pro Tip:
# if you don't wanna be exposed as a degen, use this on an alt account instead

function shikanokonokonokokoshitantan() {
	for i in $(seq 1 5); do
		input tap $CHAT_BTN_COORD
		sleep 0.5
		input text 'shikanoko nokonoko koshitantan '
		# dodge chat spam filter
		input text [00] $i $SPAM_INDEX
		input keyevent 66
		echo 'LOG: Message ('$SPAM_INDEX' | '$i')'
		sleep $SPAM_RATE
	done
}

local CHAT_BTN_COORD='400 960'

local SPAM_DURATION=10 # in minutes

local SPAM_RATE=0.5
local SPAM_GAP=55
## uncomment for constant spam rate (every 12s)
# SPAM_RATE=12
# SPAM_GAP=0

for SPAM_INDEX in $(seq 1 $SPAM_DURATION); do
	shikanokonokonokokoshitantan
	sleep $SPAM_GAP
done
