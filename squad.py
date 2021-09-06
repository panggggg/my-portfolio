# Input: s = "abcxyz123", words = ["abc","123"]
# Output: "<b>abc</b>xyz<b>123</b>"

# Input: s = "aaabbcc", words = ["aaa","aab","bc"]
# Output: "<b>aaabbc</b>c"


def add_bold_tag(s, words):
    for word in words:
        start = s.find(word)
        if start != -1:
            end = len(word) + start
            s = s[:start] + "<b>" + word + "</b>" + s[end:]
            print(s)
           
add_bold_tag("abcxyz123", ["abc","123"])

#0, 3
#1, 3
#4, 5
