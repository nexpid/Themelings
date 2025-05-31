// app/modules/messages/setupLoadFromMessageManagerHandlers.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    zuuluu = argFre;
    entity = global;
    report = entity.Object;
    tangon = report.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = tangon.bind(report)(zuuluu, entity, michal);
    michal = argPlu;
    entity = 0;
    tangon = michal[entity];
    michal = argBar;
    entity = undefined;
    report = michal.bind(entity)(tangon);
    tangon = report.fileFinishedImporting;
    michal = 'modules/messages/setupLoadFromMessageManagerHandlers.tsx';
    michal = tangon.bind(report)(michal);
    michal = function(argFoo, argBar) { // Original name: setupLoadFromMessageManagerHandlers
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            michal = arguments[2];
            entity = argBar;
            var _closure2_slot0 = entity;
            entity = undefined;
            if(!(michal === entity)) { _fun00002_ip = 23; continue _fun00001 }
 21:
            michal = {};
 23:
            var _closure2_slot1 = entity;
            var _closure2_slot2 = entity;
            tangon = function(argFoo) { // Original name: handleCallbackIfLoaded
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    zuuluu = argFoo;
                    michal = zuuluu.channel_id;
                    entity = null;
                    entity = entity != michal;
                    if(!entity) { _fun00004_ip = 39; continue _fun00003 }
 17:
                    report = _closure2_slot2;
                    tangon = report.has;
                    michal = zuuluu.channel_id;
                    entity = tangon.bind(report)(michal);
 39:
                    if(!entity) { _fun00004_ip = 56; continue _fun00003 }
 42:
                    michal = _closure2_slot0;
                    entity = undefined;
                    entity = michal.bind(entity)(zuuluu);
 56:
                    entity = undefined;
                    return entity;
                }
            };
            var _closure2_slot3 = tangon;
            verify = function(argFoo) { // Original name: handleMessage
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    entity = argFoo;
                    zuuluu = entity.message;
                    entity = zuuluu.channel_id;
                    tangon = null;
                    entity = tangon != entity;
                    if(!entity) { _fun00006_ip = 44; continue _fun00005 }
 22:
                    oscard = _closure2_slot2;
                    report = oscard.has;
                    michal = zuuluu.channel_id;
                    entity = report.bind(oscard)(michal);
 44:
                    if(!entity) { _fun00006_ip = 79; continue _fun00005 }
 47:
                    michal = _closure2_slot1;
                    if(!(tangon != michal)) { _fun00006_ip = 68; continue _fun00005 }
 58:
                    tangon = _closure2_slot1;
                    michal = undefined;
                    michal = tangon.bind(michal)();
 68:
                    michal = _closure2_slot3;
                    entity = undefined;
                    entity = michal.bind(entity)(zuuluu);
 79:
                    entity = undefined;
                    return entity;
                }
            };
            option = function(argFoo) { // Original name: handleLoadMessages
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    entity = argFoo;
                    report = entity.channelId;
                    zuuluu = entity.messages;
                    tangon = _closure2_slot2;
                    michal = tangon.add;
                    michal = michal.bind(tangon)(report);
                    tangon = _closure2_slot1;
                    michal = null;
                    if(!(michal != tangon)) { _fun00008_ip = 51; continue _fun00007 }
 41:
                    michal = _closure2_slot1;
                    entity = undefined;
                    entity = michal.bind(entity)();
 51:
                    michal = zuuluu.forEach;
                    entity = function(argFoo) {
                        zuuluu = _closure2_slot3;
                        entity = undefined;
                        michal = argFoo;
                        michal = zuuluu.bind(entity)(michal);
                        return entity;
                    };
                    entity = michal.bind(zuuluu)(entity);
                    entity = undefined;
                    return entity;
                }
            };
            golfie = function(argFoo) { // Original name: handleSearchFinish
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    zuuluu = _closure2_slot1;
                    michal = null;
                    if(!(michal != zuuluu)) { _fun00010_ip = 23; continue _fun00009 }
 13:
                    michal = _closure2_slot1;
                    entity = undefined;
                    entity = michal.bind(entity)();
 23:
                    entity = argFoo;
                    zuuluu = entity.messages;
                    michal = zuuluu.forEach;
                    entity = function(argFoo) {
                        zuuluu = argFoo;
                        michal = zuuluu.forEach;
                        entity = function(argFoo) {
                            zuuluu = _closure2_slot0;
                            michal = undefined;
                            entity = argFoo;
                            entity = zuuluu.bind(michal)(entity);
                            return entity;
                        };
                        entity = michal.bind(zuuluu)(entity);
                        entity = undefined;
                        return entity;
                    };
                    entity = michal.bind(zuuluu)(entity);
                    entity = undefined;
                    return entity;
                }
            };
            michal = michal.onBeforeBatch;
            _closure2_slot1 = michal;
            michal = global;
            michal = michal.Set;
            tangon = michal.prototype;
            tangon = Object.create(tangon, {constructor: {value: michal}});
            foxtra = tangon;
            michal = new foxtra[michal](romeon);
            michal = michal instanceof Object ? michal : tangon;
            _closure2_slot2 = michal;
            michal = {};
            yankee = zuuluu.actions;
            romeon = michal;
            tangon = copyDataProperties(romeon, yankee);
            report = function() { // Original name: POST_CONNECTION_OPEN
                michal = _closure2_slot2;
                entity = michal.clear;
                entity = entity.bind(michal)();
                entity = undefined;
                return entity;
            };
            tangon = 'POST_CONNECTION_OPEN';
            michal[tangon] = report;
            offset = {};
            offset['callback'] = verify;
            tangon = false;
            offset['autoSubscribe'] = tangon;
            report = 'MESSAGE_CREATE';
            michal[report] = offset;
            report = 'MESSAGE_UPDATE';
            michal[report] = verify;
            report = 'LOAD_MESSAGES_SUCCESS';
            michal[report] = option;
            report = 'LOAD_MESSAGES_AROUND_SUCCESS';
            michal[report] = option;
            option = function(argFoo) { // Original name: LOAD_RECENT_MENTIONS_SUCCESS
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    entity = argFoo;
                    zuuluu = entity.messages;
                    tangon = _closure2_slot1;
                    michal = null;
                    if(!(michal != tangon)) { _fun00012_ip = 32; continue _fun00011 }
 22:
                    michal = _closure2_slot1;
                    entity = undefined;
                    entity = michal.bind(entity)();
 32:
                    michal = zuuluu.forEach;
                    entity = function(argFoo) {
                        zuuluu = _closure2_slot0;
                        michal = undefined;
                        entity = argFoo;
                        entity = zuuluu.bind(michal)(entity);
                        return entity;
                    };
                    entity = michal.bind(zuuluu)(entity);
                    entity = undefined;
                    return entity;
                }
            };
            report = 'LOAD_RECENT_MENTIONS_SUCCESS';
            michal[report] = option;
            option = function(argFoo) { // Original name: LOAD_PINNED_MESSAGES_SUCCESS
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    entity = argFoo;
                    zuuluu = entity.pins;
                    tangon = _closure2_slot1;
                    michal = null;
                    if(!(michal != tangon)) { _fun00014_ip = 32; continue _fun00013 }
 22:
                    michal = _closure2_slot1;
                    entity = undefined;
                    entity = michal.bind(entity)();
 32:
                    michal = zuuluu.forEach;
                    entity = function(argFoo) {
                        entity = argFoo;
                        zuuluu = entity.message;
                        michal = _closure2_slot0;
                        entity = undefined;
                        entity = michal.bind(entity)(zuuluu);
                        return entity;
                    };
                    entity = michal.bind(zuuluu)(entity);
                    entity = undefined;
                    return entity;
                }
            };
            report = 'LOAD_PINNED_MESSAGES_SUCCESS';
            michal[report] = option;
            report = 'SEARCH_FINISH';
            michal[report] = golfie;
            report = 'MOD_VIEW_SEARCH_FINISH';
            michal[report] = golfie;
            report = {};
            oscard = function(argFoo) { // Original name: callback
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    entity = argFoo;
                    zuuluu = entity.channelId;
                    entity = null;
                    if(!(entity != zuuluu)) { _fun00016_ip = 31; continue _fun00015 }
 14:
                    michal = _closure2_slot2;
                    entity = michal.add;
                    entity = entity.bind(michal)(zuuluu);
 31:
                    entity = undefined;
                    return entity;
                }
            };
            report['callback'] = oscard;
            report['autoSubscribe'] = tangon;
            tangon = 'CHANNEL_SELECT';
            michal[tangon] = report;
            zuuluu['actions'] = michal;
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();