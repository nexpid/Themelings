// app/utils/native/NetworkUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = golfie;
    var _closure1_slot1 = oscard;
    entity = function() { // Original name: ensureChangeListenerCreated
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = _closure1_slot7;
            entity = null;
            if(!(entity == zuuluu)) { _fun00002_ip = 54; continue _fun00001 }
 13:
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot1;
            entity = 2;
            zuuluu = zuuluu[entity];
            entity = undefined;
            tangon = tangon.bind(entity)(zuuluu);
            zuuluu = tangon.addEventListener;
            entity = _closure1_slot12;
            entity = zuuluu.bind(tangon)(entity);
            _closure1_slot7 = entity;
 54:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot9 = entity;
    entity = function() { // Original name: cleanupChangeListener
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zuuluu = _closure1_slot7;
            entity = null;
            zuuluu = entity != zuuluu;
            if(!zuuluu) { _fun00004_ip = 31; continue _fun00003 }
 16:
            tangon = _closure1_slot4;
            report = tangon.length;
            tangon = 0;
            zuuluu = tangon === report;
 31:
            if(!zuuluu) { _fun00004_ip = 49; continue _fun00003 }
 34:
            tangon = _closure1_slot5;
            report = tangon.length;
            tangon = 0;
            zuuluu = tangon === report;
 49:
            if(!zuuluu) { _fun00004_ip = 67; continue _fun00003 }
 52:
            tangon = _closure1_slot6;
            report = tangon.length;
            tangon = 0;
            zuuluu = tangon === report;
 67:
            if(!zuuluu) { _fun00004_ip = 84; continue _fun00003 }
 70:
            tangon = _closure1_slot7;
            zuuluu = undefined;
            zuuluu = tangon.bind(zuuluu)();
            _closure1_slot7 = entity;
 84:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot10 = entity;
    entity = function(argFoo) { // Original name: convertNetInfo
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            report = entity.type;
            zuuluu = entity.details;
            entity = {};
            entity['type'] = report;
            michal = _closure1_slot2;
            golfie = michal.CELLULAR;
            oscard = null;
            if(!(report === golfie)) { _fun00006_ip = 45; continue _fun00005 }
 39:
            oscard = zuuluu.cellularGeneration;
 45:
            entity['effectiveSpeed'] = oscard;
            tangon = _closure1_slot2;
            tangon = tangon.CELLULAR;
            michal = null;
            if(!(report === tangon)) { _fun00006_ip = 72; continue _fun00005 }
 66:
            michal = zuuluu.carrier;
 72:
            entity['serviceProvider'] = michal;
            return entity;
        }
    };
    var _closure1_slot11 = entity;
    entity = function(argFoo) { // Original name: notifyListeners
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            option = argFoo;
            foxtra = option.isConnected;
            var _closure2_slot0 = foxtra;
            tangon = _closure1_slot11;
            entity = undefined;
            tangon = tangon.bind(entity)(option);
            var _closure2_slot1 = tangon;
            if(foxtra) { _fun00008_ip = 42; continue _fun00007 }
 36:
            oscard = _closure1_slot5;
            _fun00008_ip = 46; continue _fun00007;
 42:
            oscard = _closure1_slot4;
 46:
            report = null;
            report = report != foxtra;
            if(!report) { _fun00008_ip = 58; continue _fun00007 }
 55:
            report = foxtra;
 58:
            _closure1_slot8 = report;
            golfie = _closure1_slot3;
            report = golfie.log;
            sizing = option.type;
            backup = tangon.cellularGeneration;
            tangon = global;
            tangon = tangon.HermesInternal;
            offset = tangon.concat;
            echoed = 'Network status changed: isConnected:';
            output = ' type:';
            kiloes = ' speed:';
            result = foxtra;
            tangon = echoed[offset](result, output, sizing, kiloes, backup, foxtra);
            tangon = report.bind(golfie)(tangon);
            report = oscard.forEach;
            tangon = function(argFoo) {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    zuuluu = _closure2_slot0;
                    michal = null;
                    tangon = michal != zuuluu;
                    if(!tangon) { _fun00010_ip = 20; continue _fun00009 }
 16:
                    tangon = _closure2_slot0;
 20:
                    zuuluu = _closure2_slot1;
                    michal = argFoo;
                    entity = undefined;
                    entity = michal.bind(entity)(tangon, zuuluu);
                    return entity;
                }
            };
            tangon = report.bind(oscard)(tangon);
            tangon = _closure1_slot6;
            zuuluu = tangon.forEach;
            michal = function(argFoo) {
                zuuluu = _closure2_slot1;
                michal = argFoo;
                entity = undefined;
                entity = michal.bind(entity)(zuuluu);
                return entity;
            };
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        }
    };
    var _closure1_slot12 = entity;
    entity = function(argFoo, argBar) { // Original name: addCallback
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            michal = argFoo;
            if(michal) { _fun00012_ip = 15; continue _fun00011 }
 9:
            tangon = _closure1_slot5;
            _fun00012_ip = 19; continue _fun00011;
 15:
            tangon = _closure1_slot4;
 19:
            zuuluu = tangon.push;
            michal = argBar;
            michal = zuuluu.bind(tangon)(michal);
            michal = _closure1_slot9;
            entity = undefined;
            michal = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot13 = entity;
    entity = function(argFoo, argBar) { // Original name: removeCallback
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            michal = argFoo;
            if(michal) { _fun00014_ip = 15; continue _fun00013 }
 9:
            zuuluu = _closure1_slot5;
            _fun00014_ip = 19; continue _fun00013;
 15:
            zuuluu = _closure1_slot4;
 19:
            tangon = zuuluu.indexOf;
            michal = argBar;
            report = tangon.bind(zuuluu)(michal);
            michal = -1;
            tangon = zuuluu;
            if(!(michal !== report)) { _fun00014_ip = 71; continue _fun00013 }
 46:
            zuuluu = tangon.splice;
            michal = 1;
            michal = zuuluu.bind(tangon)(report, michal);
            michal = _closure1_slot10;
            entity = undefined;
            entity = michal.bind(entity)();
 71:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot14 = entity;
    entity = global;
    offset = entity.Object;
    option = offset.defineProperty;
    michal = {};
    verify = true;
    michal['value'] = verify;
    entity = '__esModule';
    entity = option.bind(offset)(zuuluu, entity, michal);
    entity = 0;
    michal = oscard[entity];
    entity = undefined;
    michal = report.bind(entity)(michal);
    michal = michal.NetworkConnectionTypes;
    var _closure1_slot2 = michal;
    michal = 1;
    michal = oscard[michal];
    offset = golfie.bind(entity)(michal);
    michal = offset.prototype;
    option = Object.create(michal, {constructor: {value: offset}});
    foxtra = 'NetworkUtils';
    backup = option;
    michal = new backup[offset](foxtra, romeon);
    option = michal instanceof Object ? michal : option;
    var _closure1_slot3 = option;
    michal = option.enableNativeLogger;
    michal = michal.bind(option)(verify);
    michal = new Array(0);
    var _closure1_slot4 = michal;
    michal = new Array(0);
    var _closure1_slot5 = michal;
    michal = new Array(0);
    var _closure1_slot6 = michal;
    michal = null;
    var _closure1_slot7 = michal;
    michal = false;
    var _closure1_slot8 = michal;
    michal = 2;
    michal = oscard[michal];
    golfie = golfie.bind(entity)(michal);
    michal = golfie.fetch;
    option = michal.bind(golfie)();
    golfie = option.then;
    michal = function(argFoo) {
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            entity = argFoo;
            entity = entity.isConnected;
            michal = null;
            michal = michal != entity;
            if(!michal) { _fun00016_ip = 21; continue _fun00015 }
 18:
            michal = entity;
 21:
            _closure1_slot8 = michal;
            entity = undefined;
            return entity;
        }
    };
    michal = golfie.bind(option)(michal);
    michal = {};
    golfie = function(argFoo) { // Original name: addOnlineCallback
        tangon = _closure1_slot13;
        entity = undefined;
        zuuluu = true;
        michal = argFoo;
        michal = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    michal['addOnlineCallback'] = golfie;
    golfie = function(argFoo) { // Original name: removeOnlineCallback
        tangon = _closure1_slot14;
        entity = undefined;
        zuuluu = true;
        michal = argFoo;
        michal = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    michal['removeOnlineCallback'] = golfie;
    golfie = function(argFoo) { // Original name: addOfflineCallback
        tangon = _closure1_slot13;
        entity = undefined;
        zuuluu = false;
        michal = argFoo;
        michal = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    michal['addOfflineCallback'] = golfie;
    golfie = function(argFoo) { // Original name: removeOfflineCallback
        tangon = _closure1_slot14;
        entity = undefined;
        zuuluu = false;
        michal = argFoo;
        michal = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    michal['removeOfflineCallback'] = golfie;
    golfie = function(argFoo) { // Original name: addChangeCallback
        tangon = _closure1_slot6;
        zuuluu = tangon.push;
        michal = argFoo;
        michal = zuuluu.bind(tangon)(michal);
        michal = _closure1_slot9;
        entity = undefined;
        michal = michal.bind(entity)();
        return entity;
    };
    michal['addChangeCallback'] = golfie;
    golfie = function(argFoo) { // Original name: removeChangeCallback
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            tangon = _closure1_slot6;
            zuuluu = tangon.indexOf;
            michal = argFoo;
            report = zuuluu.bind(tangon)(michal);
            michal = -1;
            if(!(michal !== report)) { _fun00018_ip = 60; continue _fun00017 }
 31:
            tangon = _closure1_slot6;
            zuuluu = tangon.splice;
            michal = 1;
            michal = zuuluu.bind(tangon)(report, michal);
            michal = _closure1_slot10;
            entity = undefined;
            entity = michal.bind(entity)();
 60:
            entity = undefined;
            return entity;
        }
    };
    michal['removeChangeCallback'] = golfie;
    golfie = function() { // Original name: getNetworkInformation
        zuuluu = _closure1_slot0;
        michal = _closure1_slot1;
        entity = 2;
        michal = michal[entity];
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        entity = michal.fetch;
        zuuluu = entity.bind(michal)();
        michal = zuuluu.then;
        entity = function(argFoo) {
            zuuluu = _closure1_slot11;
            michal = undefined;
            entity = argFoo;
            entity = zuuluu.bind(michal)(entity);
            return entity;
        };
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    michal['getNetworkInformation'] = golfie;
    tangon = function() { // Original name: isOnline
        entity = _closure1_slot8;
        return entity;
    };
    michal['isOnline'] = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'utils/native/NetworkUtils.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();