MAKEFILE_THIS := $(lastword $(MAKEFILE_LIST))
SRC_PATH      := $(patsubst %/,%,$(dir $(abspath $(MAKEFILE_THIS))))
APP_FILE      := fabric_contract.json
APP_NAME      := flogo_cc
LOG_LEVEL     := INFO
CC_DEPLOY     := $(GOPATH)/src/github.com/hyperledger/fabric-samples/chaincode

.PHONY: all
all: create build

.PHONY: clean
clean:
	rm -Rf $(APP_NAME)

.PHONY: create
create: $(APP_FILE) clean
	flogo create -f $(APP_FILE) $(APP_NAME) && \
	cp chaincode_shim.go $(APP_NAME)/src/$(APP_NAME) && \
	rm $(APP_NAME)/src/$(APP_NAME)/main.go && \
	cd $(APP_NAME)/src/$(APP_NAME) && \
	rm -Rf Gopkg.* vendor && \
	dep init

.PHONY: build
build: $(APP_NAME)
	cp chaincode_shim.go $(APP_NAME)/src/$(APP_NAME) && \
	cd $(APP_NAME) && \
	env GOOS=linux GOARCH=amd64 flogo build -e

.PHONY: deploy
deploy: build
	cp $(APP_NAME)/bin/linux_amd64/$(APP_NAME) $(APP_NAME)/src/$(APP_NAME) && \
	rm -Rf $(CC_DEPLOY)/$(APP_NAME) && \
	cp -Rf $(APP_NAME)/src/$(APP_NAME) $(CC_DEPLOY)
