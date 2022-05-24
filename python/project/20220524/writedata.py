f = open("/Users/pjh/Documents/정리하는자료들/개발공부/bang-jang-serise/python/project/20220524/새파일.txt", 'w')
for i in range(1, 11):
    data = "%d번째 줄입니다.\n" % i
    f.write(data)
f.close()