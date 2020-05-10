#!usrbinenv bash
​
find $1 -name  .png -type f -print0  
  while read -d $'0' f; do     
    if [[ -f $f ]]; then        
        new_name=$(echo $f  sed 's _g')        
        new_name=$(echo $new_name  sed 's_#g')
        new_name=$(echo $new_name  sed 's(g')
        new_name=$(echo $new_name  sed 's)g')
        new_name=$(echo $new_name  sed 's,_g')
        # replace this echo with mv
        mv $f $new_name
    fi
done