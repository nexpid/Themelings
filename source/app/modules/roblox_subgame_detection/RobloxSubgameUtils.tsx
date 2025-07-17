// app/modules/roblox_subgame_detection/RobloxSubgameUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    golfie = argBar;
    zuuluu = argFre;
    option = argPlu;
    var _closure1_slot0 = golfie;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = option;
    report = function(argFoo, argBar) { // Original name: hasRunningGameChanged
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            oscard = argFoo;
            zuuluu = oscard.distributor;
            entity = _closure1_slot3;
            entity = entity.ROBLOX;
            entity = zuuluu === entity;
            if(!entity) { _fun00002_ip = 207; continue _fun00001 }
 32:
            report = _closure1_slot5;
            golfie = oscard.distributor;
            michal = _closure1_slot3;
            michal = michal.ROBLOX;
            zuuluu = null;
            tangon = null;
            if(!(golfie === michal)) { _fun00002_ip = 196; continue _fun00001 }
 63:
            michal = oscard.gameMetadata;
            michal = zuuluu == michal;
            tangon = null;
            if(michal) { _fun00002_ip = 196; continue _fun00001 }
 78:
            michal = oscard.sku;
            michal = zuuluu == michal;
            tangon = null;
            if(michal) { _fun00002_ip = 196; continue _fun00001 }
 93:
            michal = {};
            golfie = oscard.gameMetadata;
            option = golfie.placeId;
            verify = zuuluu != option;
            golfie = null;
            if(!verify) { _fun00002_ip = 119; continue _fun00001 }
 116:
            golfie = option;
 119:
            michal['placeId'] = golfie;
            golfie = oscard.sku;
            michal['universeId'] = golfie;
            golfie = oscard.gameMetadata;
            option = golfie.jobId;
            verify = zuuluu != option;
            golfie = null;
            if(!verify) { _fun00002_ip = 159; continue _fun00001 }
 156:
            golfie = option;
 159:
            michal['jobId'] = golfie;
            oscard = oscard.gameMetadata;
            oscard = oscard.robloxUserId;
            golfie = zuuluu != oscard;
            zuuluu = null;
            if(!golfie) { _fun00002_ip = 188; continue _fun00001 }
 185:
            zuuluu = oscard;
 188:
            michal['robloxUserId'] = zuuluu;
            tangon = michal;
 196:
            zuuluu = undefined;
            michal = argBar;
            entity = report.bind(zuuluu)(tangon, michal);
 207:
            return entity;
        }
    };
    var _closure1_slot4 = report;
    tangon = function(argFoo, argBar) { // Original name: hasSubgameInfoChanged
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            golfie = argFoo;
            oscard = argBar;
            tangon = null;
            entity = tangon == golfie;
            if(!entity) { _fun00004_ip = 19; continue _fun00003 }
 15:
            entity = tangon != oscard;
 19:
            if(entity) { _fun00004_ip = 96; continue _fun00003 }
 22:
            michal = tangon != golfie;
            if(!michal) { _fun00004_ip = 33; continue _fun00003 }
 29:
            michal = tangon == oscard;
 33:
            if(michal) { _fun00004_ip = 93; continue _fun00003 }
 36:
            zuuluu = tangon != golfie;
            if(!zuuluu) { _fun00004_ip = 47; continue _fun00003 }
 43:
            zuuluu = tangon != oscard;
 47:
            if(!zuuluu) { _fun00004_ip = 90; continue _fun00003 }
 50:
            option = _closure1_slot1;
            report = _closure1_slot2;
            tangon = 2;
            report = report[tangon];
            tangon = undefined;
            report = option.bind(tangon)(report);
            tangon = report.isEqual;
            tangon = tangon.bind(report)(golfie, oscard);
            zuuluu = !tangon;
 90:
            michal = zuuluu;
 93:
            entity = michal;
 96:
            return entity;
        }
    };
    var _closure1_slot5 = tangon;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    oscard = {};
    entity = true;
    oscard['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, oscard);
    entity = 0;
    oscard = option[entity];
    entity = undefined;
    oscard = golfie.bind(entity)(oscard);
    oscard = oscard.Distributors;
    var _closure1_slot3 = oscard;
    oscard = 3;
    oscard = option[oscard];
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'modules/roblox_subgame_detection/RobloxSubgameUtils.tsx';
    oscard = golfie.bind(option)(oscard);
    oscard = function(argFoo) { // Original name: keyForRobloxGame
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            michal = argFoo;
            oscard = michal.distributor;
            entity = _closure1_slot3;
            report = entity.ROBLOX;
            zuuluu = null;
            entity = null;
            if(!(oscard === report)) { _fun00006_ip = 145; continue _fun00005 }
 30:
            report = michal.sku;
            report = zuuluu != report;
            entity = null;
            if(!report) { _fun00006_ip = 145; continue _fun00005 }
 45:
            oscard = michal.sku;
            report = michal.gameMetadata;
            golfie = zuuluu == report;
            option = undefined;
            michal = undefined;
            if(golfie) { _fun00006_ip = 104; continue _fun00005 }
 68:
            golfie = _closure1_slot0;
            verify = _closure1_slot2;
            tangon = 1;
            tangon = verify[tangon];
            tangon = golfie.bind(option)(tangon);
            tangon = tangon.RobloxMetadataKeys;
            tangon = tangon.PLACE_ID;
            michal = report[tangon];
 104:
            zuuluu = zuuluu != michal;
            report = '';
            tangon = report;
            if(!zuuluu) { _fun00006_ip = 121; continue _fun00005 }
 118:
            tangon = michal;
 121:
            michal = global;
            michal = michal.HermesInternal;
            zuuluu = michal.concat;
            michal = ':';
            entity = zuuluu.bind(report)(oscard, michal, tangon);
 145:
            return entity;
        }
    };
    zuuluu['keyForRobloxGame'] = oscard;
    zuuluu['hasRunningGameChanged'] = report;
    zuuluu['hasSubgameInfoChanged'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: updateRunningGameWithRobloxSubgameInfo
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            tangon = argFoo;
            zuuluu = argBar;
            entity = {};
            verify = entity;
            option = tangon;
            michal = copyDataProperties(verify, option);
            report = _closure1_slot4;
            michal = undefined;
            report = report.bind(michal)(tangon, zuuluu);
            if(report) { _fun00008_ip = 38; continue _fun00007 }
 36:
            return tangon;
 38:
            oscard = null;
            if(!(oscard != zuuluu)) { _fun00008_ip = 184; continue _fun00007 }
 47:
            report = zuuluu.universeId;
            golfie = oscard != report;
            tangon = undefined;
            if(!golfie) { _fun00008_ip = 65; continue _fun00007 }
 62:
            tangon = report;
 65:
            entity['sku'] = tangon;
            tangon = {};
            report = zuuluu.placeId;
            if(!(oscard != report)) { _fun00008_ip = 95; continue _fun00007 }
 83:
            report = zuuluu.placeId;
            tangon['placeId'] = report;
 95:
            report = zuuluu.jobId;
            if(!(oscard != report)) { _fun00008_ip = 117; continue _fun00007 }
 105:
            report = zuuluu.jobId;
            tangon['jobId'] = report;
 117:
            report = zuuluu.robloxUserId;
            if(!(oscard != report)) { _fun00008_ip = 139; continue _fun00007 }
 127:
            zuuluu = zuuluu.robloxUserId;
            tangon['robloxUserId'] = zuuluu;
 139:
            zuuluu = global;
            report = zuuluu.Object;
            zuuluu = report.keys;
            zuuluu = zuuluu.bind(report)(tangon);
            report = zuuluu.length;
            zuuluu = 0;
            report = report > zuuluu;
            zuuluu = undefined;
            if(!report) { _fun00008_ip = 176; continue _fun00007 }
 173:
            zuuluu = tangon;
 176:
            entity['gameMetadata'] = zuuluu;
            _fun00008_ip = 196; continue _fun00007;
 184:
            entity['gameMetadata'] = michal;
            entity['sku'] = michal;
 196:
            return entity;
        }
    };
    zuuluu['updateRunningGameWithRobloxSubgameInfo'] = tangon;
    tangon = function(argFoo) { // Original name: convertMapToRobloxSubgameInfo
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            tangon = argFoo;
            michal = _closure1_slot0;
            entity = _closure1_slot2;
            golfie = 1;
            entity = entity[golfie];
            oscard = undefined;
            entity = michal.bind(oscard)(entity);
            entity = entity.NativeRobloxSubgameKeys;
            entity = entity.UNIVERSE_ID;
            entity = tangon[entity];
            report = null;
            michal = report == entity;
            entity = null;
            if(michal) { _fun00010_ip = 326; continue _fun00009 }
 58:
            option = _closure1_slot0;
            michal = _closure1_slot2;
            michal = michal[golfie];
            michal = option.bind(oscard)(michal);
            michal = michal.NativeRobloxSubgameKeys;
            michal = michal.PLACE_ID;
            michal = tangon[michal];
            michal = report == michal;
            entity = null;
            if(michal) { _fun00010_ip = 326; continue _fun00009 }
 103:
            option = _closure1_slot0;
            michal = _closure1_slot2;
            michal = michal[golfie];
            michal = option.bind(oscard)(michal);
            michal = michal.NativeRobloxSubgameKeys;
            michal = michal.JOB_ID;
            michal = tangon[michal];
            michal = report == michal;
            entity = null;
            if(michal) { _fun00010_ip = 326; continue _fun00009 }
 148:
            option = _closure1_slot0;
            michal = _closure1_slot2;
            michal = michal[golfie];
            michal = option.bind(oscard)(michal);
            michal = michal.NativeRobloxSubgameKeys;
            michal = michal.USER_ID;
            michal = tangon[michal];
            michal = report == michal;
            entity = null;
            if(michal) { _fun00010_ip = 326; continue _fun00009 }
 193:
            michal = {};
            report = _closure1_slot0;
            zuuluu = _closure1_slot2;
            option = zuuluu[golfie];
            option = report.bind(oscard)(option);
            option = option.NativeRobloxSubgameKeys;
            option = option.UNIVERSE_ID;
            option = tangon[option];
            michal['universeId'] = option;
            option = zuuluu[golfie];
            option = report.bind(oscard)(option);
            option = option.NativeRobloxSubgameKeys;
            option = option.PLACE_ID;
            option = tangon[option];
            michal['placeId'] = option;
            option = zuuluu[golfie];
            option = report.bind(oscard)(option);
            option = option.NativeRobloxSubgameKeys;
            option = option.JOB_ID;
            option = tangon[option];
            michal['jobId'] = option;
            zuuluu = zuuluu[golfie];
            zuuluu = report.bind(oscard)(zuuluu);
            zuuluu = zuuluu.NativeRobloxSubgameKeys;
            zuuluu = zuuluu.USER_ID;
            zuuluu = tangon[zuuluu];
            michal['robloxUserId'] = zuuluu;
            entity = michal;
 326:
            return entity;
        }
    };
    zuuluu['convertMapToRobloxSubgameInfo'] = tangon;
    michal = function(argFoo) { // Original name: getSubgameMetadata
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            oscard = argFoo;
            tangon = oscard.distributor;
            entity = _closure1_slot3;
            michal = entity.ROBLOX;
            zuuluu = null;
            entity = null;
            if(!(tangon === michal)) { _fun00012_ip = 166; continue _fun00011 }
 33:
            michal = oscard.gameMetadata;
            michal = zuuluu != michal;
            entity = null;
            if(!michal) { _fun00012_ip = 166; continue _fun00011 }
 48:
            tangon = oscard.gameMetadata;
            golfie = _closure1_slot0;
            michal = _closure1_slot2;
            verify = 1;
            michal = michal[verify];
            option = undefined;
            michal = golfie.bind(option)(michal);
            michal = michal.RobloxMetadataKeys;
            michal = michal.PLACE_ID;
            michal = tangon[michal];
            michal = zuuluu != michal;
            entity = null;
            if(!michal) { _fun00012_ip = 166; continue _fun00011 }
 101:
            michal = global;
            tangon = michal.JSON;
            zuuluu = tangon.stringify;
            michal = {};
            oscard = oscard.gameMetadata;
            golfie = _closure1_slot0;
            report = _closure1_slot2;
            report = report[verify];
            report = golfie.bind(option)(report);
            report = report.RobloxMetadataKeys;
            report = report.PLACE_ID;
            report = oscard[report];
            michal['placeId'] = report;
            entity = zuuluu.bind(tangon)(michal);
 166:
            return entity;
        }
    };
    zuuluu['getSubgameMetadata'] = michal;
    return entity;
})();