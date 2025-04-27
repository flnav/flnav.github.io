#!/bin/bash

echo "===== CPU 使用情况 (CPU Usage) ====="
top -bn1 | grep "Cpu(s)" | awk '{print "用户(User): " $2 "%, 系统(System): " $4 "%, 空闲(Idle): " $8 "%"}'

echo -e "\n===== 内存使用情况 (Memory Usage) ====="
free -h | awk '/Mem/{print "总内存(Total): " $2 ", 已使用(Used): " $3 ", 空闲(Free): " $4 ", 可用(Available): " $7}'

echo -e "\n===== 磁盘使用情况 (Disk Usage) ====="
df -h | grep -E '^/dev' | awk '{print "磁盘(Disk): " $1 ", 总大小(Total): " $2 ", 已使用(Used): " $3 ", 可用(Available): " $4 ", 使用率(Usage): " $5}'