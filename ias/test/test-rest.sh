#!/usr/bin/env bash

#
# TODO: irgendwie aus den zurückgegebenen Hallen-Ids die erste auswählen und dabei PUT anwenden!
#

# Test, ob der Server ueberhaupt online ist !
curl 127.0.0.1:8080 &> /dev/null
if [[ $? -ne 0 ]]; then
	echo "Server not up and running on 127.0.0.1:8080 !"
	echo "Run> cd $HOME/GitHub/ias-praktikum/ias/"
	echo "Run> python3 server.py"
	exit 1
fi

RED='\033[0;31m'
NOCOL='\033[0m'


################################################################################################################################################################
################################################################################################################################################################
################################################################################################################################################################


printf "\n\nUEBERPRUEFT WIRD 127.0.0.1:8080/hallen\n"
printf "HTTP-Methoden: GET | PUT:\n"
printf "========================================\n"

printf "\nGET http://127.0.0.1:8080/hallen\n"
printf "HTTP-Rueckgabe-Code: "
echo $(curl -s -o /dev/null -w "%{http_code}" http://127.0.0.1:8080/hallen)
printf "Zurueckgegebene JSON-Daten: "
curl -s http://127.0.0.1:8080/hallen

printf "\nGET http://127.0.0.1:8080/hallen/1\n"
printf "HTTP-Rueckgabe-Code: "
echo $(curl -s -o /dev/null -w "%{http_code}" http://127.0.0.1:8080/hallen/1)
#printf "Zurueckgegebene JSON-Daten: "
#curl -s http://127.0.0.1:8080/hallen/1

printf "\n________________________________________________________________________________\n\n"
################################################################################################################################################################

# # Alte Information abspeichern

# # Änderung vornehmen
# HALLEN_PUT() {
#     cat <<EOF
# {
#     "unique_id" : $PROJEKT_ID,
#     "komponenten" : [1, 2, 3, 4, 5]
# }
# EOF
# }

# printf "\nPUT http://127.0.0.1/hallen/1 + Daten\n"
# echo "Uebermittelte Daten: $(HALLEN_PUT)"
# printf "HTTP-Rueckgabe-Code: "
# echo $(curl -s -o /dev/null -w "%{http_code}" --header "Content-Type: application/json" --request PUT --data "$(HALLEN_PUT)" 127.0.0.1:8080/hallen/1)

# # Änderung zurücksetzen
# HALLEN_PUT() {
#     cat <<EOF
# {
#     "unique_id" : $PROJEKT_ID,
#     "komponenten" : [1, 2, 3, 4, 5]
# }
# EOF
# }

# printf "\nPUT http://127.0.0.1/hallen/1 + Daten\n"
# echo "Uebermittelte Daten: $(HALLEN_PUT)"
# printf "HTTP-Rueckgabe-Code: "
# echo $(curl -s -o /dev/null -w "%{http_code}" --header "Content-Type: application/json" --request PUT --data "$(HALLEN_PUT)" 127.0.0.1:8080/hallen/1)


################################################################################################################################################################
################################################################################################################################################################
################################################################################################################################################################


printf "\n\n${RED}================================================================================\n\n"

read -n 1 -p "Weiter (y|n): " ANSWER
case $ANSWER in
	N|n)	printf "\nBeende...\n${NOCOL}"
            exit 1 ;;
	*)		;;
esac

printf "\n\n================================================================================${NOCOL}\n\n"


################################################################################################################################################################
################################################################################################################################################################
################################################################################################################################################################


printf "\nUEBERPRUEFT WIRD 127.0.0.1:8080/templates\n"
printf "HTTP-Methoden: GET:\n"
printf "==================\n"

printf "\nGET http://127.0.0.1:8080/templates:\n"
printf "HTTP-Rueckgabe-Code: "
echo $(curl -s -o /dev/null -w "%{http_code}" http://127.0.0.1:8080/templates)
#printf "\nZurueckgegebene JSON-Daten: "
#curl -s http://127.0.0.1:8080/templates
