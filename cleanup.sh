#!/bin/bash

# Directories and patterns to remove
DIR1="./user_data/data/binance"
DIR2="./user_data/models/torch-lstm12"
PATTERN2="./user_data/tradesv3.*"

# Check if directory or files exist and remove them
    echo "Removing directory: $DIR1"
    rm -rf "$DIR1"
    echo "Removing directory: $DIR2"
    rm -rf "$DIR2"


    echo "Removing database: $PATTERN2"
    rm -rf $PATTERN2

echo "Cleanup completed."
