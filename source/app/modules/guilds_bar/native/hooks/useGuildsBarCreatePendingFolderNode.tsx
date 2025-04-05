// app/modules/guilds_bar/native/hooks/useGuildsBarCreatePendingFolderNode.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            var _closure2_slot0 = zuuluu;
            report = global;
            michal = report.Symbol;
            tangon = 'undefined';
            michal = typeof michal;
            michal = tangon !== michal;
            if(!michal) { _fun00002_ip = 46; continue _fun00001 }
 30:
            tangon = report.Symbol;
            tangon = tangon.iterator;
            michal = zuuluu[tangon];
 46:
            if(michal) { _fun00002_ip = 55; continue _fun00001 }
 49:
            michal = zuuluu.@@iterator;
 55:
            if(michal) { _fun00002_ip = 345; continue _fun00001 }
 61:
            oscard = report.Array;
            tangon = oscard.isArray;
            oscard = tangon.bind(oscard)(zuuluu);
            tangon = michal;
            if(oscard) { _fun00002_ip = 323; continue _fun00001 }
 86:
            option = undefined;
            oscard = undefined;
            if(!zuuluu) { _fun00002_ip = 283; continue _fun00001 }
 96:
            verify = 'string';
            golfie = typeof zuuluu;
            if(!(verify !== golfie)) { _fun00002_ip = 270; continue _fun00001 }
 110:
            golfie = {};
            verify = golfie.toString;
            golfie = verify.call;
            yankee = golfie.bind(verify)(zuuluu);
            offset = yankee.slice;
            verify = 8;
            golfie = -1;
            verify = offset.bind(yankee)(verify, golfie);
            golfie = 'Object';
            golfie = golfie === verify;
            if(!golfie) { _fun00002_ip = 163; continue _fun00001 }
 158:
            golfie = zuuluu.constructor;
 163:
            offset = verify;
            if(!golfie) { _fun00002_ip = 179; continue _fun00001 }
 169:
            golfie = zuuluu.constructor;
            offset = golfie.name;
 179:
            golfie = 'Map';
            if(!(golfie !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 187:
            golfie = 'Set';
            if(!(golfie !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 195:
            golfie = 'Arguments';
            if(!(golfie !== offset)) { _fun00002_ip = 234; continue _fun00001 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golfie = verify.test;
            verify = golfie.bind(verify)(offset);
            golfie = undefined;
            if(!verify) { _fun00002_ip = 247; continue _fun00001 }
 234:
            verify = _closure1_slot7;
            golfie = verify.bind(option)(zuuluu, option);
 247:
            _fun00002_ip = 265; continue _fun00001;
 249:
            offset = report.Array;
            verify = offset.from;
            golfie = verify.bind(offset)(zuuluu);
 265:
            oscard = golfie;
            _fun00002_ip = 283; continue _fun00001;
 270:
            golfie = _closure1_slot7;
            oscard = golfie.bind(option)(zuuluu, option);
 283:
            tangon = oscard;
            if(tangon) { _fun00002_ip = 323; continue _fun00001 }
 289:
            golfie = report.TypeError;
            report = golfie.prototype;
            oscard = Object.create(report, {constructor: {value: golfie}});
            foxtra = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            backup = oscard;
            report = new backup[golfie](foxtra, romeon);
            report = report instanceof Object ? report : oscard;
            throw report;
 323:
            if(!tangon) { _fun00002_ip = 330; continue _fun00001 }
 326:
            _closure2_slot0 = tangon;
 330:
            tangon = 0;
            var _closure2_slot1 = tangon;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    michal = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(michal >= entity))) { _fun00004_ip = 56; continue _fun00003 }
 20:
                    entity = {};
                    michal = false;
                    entity['done'] = michal;
                    zuuluu = _closure2_slot0;
                    michal = _closure2_slot1;
                    michal = parseFloat(michal);
                    tangon = michal + 1;
                    _closure2_slot1 = tangon;
                    michal = zuuluu[michal];
                    entity['value'] = michal;
                    _fun00004_ip = 67; continue _fun00003;
 56:
                    michal = {};
                    zuuluu = true;
                    michal['done'] = zuuluu;
                    entity = michal;
 67:
                    return entity;
                }
            };
            return entity;
 345:
            entity = michal.call;
            zuuluu = entity.bind(michal)(zuuluu);
            michal = zuuluu.next;
            entity = michal.bind;
            entity = entity.bind(michal)(zuuluu);
            return entity;
        }
    };
    var _closure1_slot6 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tangon = argFoo;
            entity = null;
            zuuluu = undefined;
            entity = entity == zuuluu;
            if(entity) { _fun00006_ip = 23; continue _fun00005 }
 14:
            michal = tangon.length;
            entity = zuuluu > michal;
 23:
            michal = undefined;
            if(!entity) { _fun00006_ip = 33; continue _fun00005 }
 28:
            michal = tangon.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zuuluu)(michal);
            zuuluu = 0;
            report = zuuluu < michal;
            if(!report) { _fun00006_ip = 70; continue _fun00005 }
 55:
            report = tangon[zuuluu];
            entity[zuuluu] = report;
            zuuluu = zuuluu + 1;
            if(zuuluu < michal) { _fun00006_ip = 55; continue _fun00005 }
 70:
            return entity;
        }
    };
    var _closure1_slot7 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    option = oscard[entity];
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(option);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 9;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/guilds_bar/native/hooks/useGuildsBarCreatePendingFolderNode.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function() { // Original name: useGuildsBarCreatePendingFolderNode
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            zuuluu = _closure1_slot0;
            report = _closure1_slot2;
            michal = 3;
            tangon = report[michal];
            golfie = undefined;
            offset = zuuluu.bind(golfie)(tangon);
            verify = offset.useStateFromStores;
            tangon = _closure1_slot4;
            oscard = new Array(1);
            oscard[0] = tangon;
            tangon = function() {
                entity = _closure1_slot4;
                entity = entity.hasFetchedRequestToJoinGuilds;
                return entity;
            };
            verify = verify.bind(offset)(oscard, tangon);
            var _closure2_slot0 = verify;
            oscard = _closure1_slot1;
            tangon = 4;
            tangon = report[tangon];
            tangon = oscard.bind(golfie)(tangon);
            tangon = tangon.bind(golfie)();
            michal = report[michal];
            oscard = zuuluu.bind(golfie)(michal);
            report = oscard.useStateFromStores;
            michal = _closure1_slot5;
            zuuluu = new Array(1);
            zuuluu[0] = michal;
            michal = function() {
                zuuluu = _closure1_slot5;
                michal = zuuluu.isFolderExpanded;
                report = _closure1_slot0;
                tangon = _closure1_slot2;
                entity = 5;
                tangon = tangon[entity];
                entity = undefined;
                entity = report.bind(entity)(tangon);
                entity = entity.SpecialGuildsNodeIds;
                entity = entity.PENDING_JOIN_REQUESTS_FOLDER;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            zuuluu = report.bind(oscard)(zuuluu, michal);
            oscard = _closure1_slot3;
            report = oscard.useEffect;
            michal = new Array(1);
            michal[0] = verify;
            entity = function() {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    entity = _closure2_slot0;
                    if(entity) { _fun00010_ip = 45; continue _fun00009 }
 10:
                    zuuluu = _closure1_slot1;
                    michal = _closure1_slot2;
                    entity = 6;
                    michal = michal[entity];
                    entity = undefined;
                    michal = zuuluu.bind(entity)(michal);
                    entity = michal.fetchRequestToJoinGuilds;
                    entity = entity.bind(michal)();
 45:
                    entity = undefined;
                    return entity;
                }
            };
            entity = report.bind(oscard)(entity, michal);
            michal = tangon.length;
            entity = 0;
            if(!(!(michal > entity))) { _fun00008_ip = 177; continue _fun00007 }
 161:
            entity = {'expanded': false, 'pendingFolderNode': null};
            return entity;
 177:
            romeon = _closure1_slot0;
            foxtra = _closure1_slot2;
            oscard = 7;
            entity = foxtra[oscard];
            report = romeon.bind(golfie)(entity);
            michal = report.createFolderNode;
            entity = {};
            verify = 5;
            verify = foxtra[verify];
            verify = romeon.bind(golfie)(verify);
            verify = verify.SpecialGuildsNodeIds;
            verify = verify.PENDING_JOIN_REQUESTS_FOLDER;
            entity['folderId'] = verify;
            verify = 8;
            offset = foxtra[verify];
            offset = romeon.bind(golfie)(offset);
            yankee = offset.intl;
            offset = yankee.string;
            verify = foxtra[verify];
            verify = romeon.bind(golfie)(verify);
            verify = verify.t;
            verify = verify.scsU+v;
            verify = offset.bind(yankee)(verify);
            entity['folderName'] = verify;
            entity['expanded'] = zuuluu;
            entity['guildIds'] = tangon;
            michal = michal.bind(report)(entity);
            entity = _closure1_slot6;
            report = entity.bind(golfie)(tangon);
            tangon = report.bind(golfie)();
            entity = tangon.done;
            if(entity) { _fun00008_ip = 391; continue _fun00007 }
 322:
            foxtra = tangon.value;
            offset = michal.children;
            verify = offset.push;
            yankee = _closure1_slot0;
            entity = _closure1_slot2;
            entity = entity[oscard];
            romeon = yankee.bind(golfie)(entity);
            yankee = romeon.createGuildNode;
            entity = michal.id;
            entity = yankee.bind(romeon)(foxtra, entity);
            entity = verify.bind(offset)(entity);
            verify = report.bind(golfie)();
            entity = verify.done;
            tangon = verify;
            if(!entity) { _fun00008_ip = 322; continue _fun00007 }
 391:
            entity = {};
            entity['expanded'] = zuuluu;
            entity['pendingFolderNode'] = michal;
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();