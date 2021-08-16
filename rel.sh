for f in $(find . -name "*.json"); do
  sed -i '' -e "s/\/amis\//\/amis-1.1.7\//g" $f
done

