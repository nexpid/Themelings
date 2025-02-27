// app/modules/activities/useEmbeddedAppsForChannel.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    oscard = argBar;
    verify = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = verify;
    var _closure1_slot2 = golfie;
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
            verify = _closure1_slot9;
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
            golfie = _closure1_slot9;
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
    var _closure1_slot8 = entity;
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
    var _closure1_slot9 = entity;
    tangon = function(argFoo, argBar) { // Original name: useEmbeddedApps
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            option = argFoo;
            report = argBar;
            var _closure2_slot0 = option;
            var _closure2_slot1 = report;
            zuuluu = option.map;
            michal = function(argFoo) {
                entity = argFoo;
                entity = entity.applicationId;
                return entity;
            };
            tangon = zuuluu.bind(option)(michal);
            oscard = _closure1_slot1;
            golfie = _closure1_slot2;
            zuuluu = 6;
            zuuluu = golfie[zuuluu];
            verify = undefined;
            zuuluu = oscard.bind(verify)(zuuluu);
            golfie = zuuluu.bind(verify)(tangon);
            var _closure2_slot2 = golfie;
            zuuluu = global;
            oscard = zuuluu.Set;
            zuuluu = oscard.prototype;
            tangon = Object.create(zuuluu, {constructor: {value: oscard}});
            sizing = new Array(0);
            output = tangon;
            zuuluu = new output[oscard](sizing, kiloes);
            zuuluu = zuuluu instanceof Object ? zuuluu : tangon;
            var _closure2_slot3 = zuuluu;
            tangon = _closure1_slot8;
            offset = tangon.bind(verify)(option);
            oscard = offset.bind(verify)();
            tangon = oscard.done;
            if(tangon) { _fun00008_ip = 201; continue _fun00007 }
 124:
            yankee = _closure1_slot8;
            tangon = oscard.value;
            tangon = tangon.userIds;
            romeon = yankee.bind(verify)(tangon);
            yankee = romeon.bind(verify)();
            tangon = yankee.done;
            if(tangon) { _fun00008_ip = 186; continue _fun00007 }
 156:
            foxtra = yankee.value;
            tangon = zuuluu.add;
            tangon = tangon.bind(zuuluu)(foxtra);
            foxtra = romeon.bind(verify)();
            tangon = foxtra.done;
            yankee = foxtra;
            if(!tangon) { _fun00008_ip = 156; continue _fun00007 }
 186:
            yankee = offset.bind(verify)();
            tangon = yankee.done;
            oscard = yankee;
            if(!tangon) { _fun00008_ip = 124; continue _fun00007 }
 201:
            oscard = _closure1_slot0;
            offset = _closure1_slot2;
            tangon = 4;
            tangon = offset[tangon];
            offset = oscard.bind(verify)(tangon);
            verify = offset.useStateFromStoresArray;
            tangon = _closure1_slot5;
            oscard = new Array(1);
            oscard[0] = tangon;
            tangon = new Array(1);
            tangon[0] = zuuluu;
            zuuluu = function() {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    entity = new Array(0);
                    zuuluu = _closure1_slot8;
                    michal = _closure2_slot3;
                    report = undefined;
                    tangon = zuuluu.bind(report)(michal);
                    zuuluu = tangon.bind(report)();
                    michal = zuuluu.done;
                    if(michal) { _fun00010_ip = 82; continue _fun00009 }
 37:
                    verify = zuuluu.value;
                    golfie = entity.push;
                    option = _closure1_slot5;
                    michal = option.getUser;
                    michal = michal.bind(option)(verify);
                    michal = golfie.bind(entity)(michal);
                    golfie = tangon.bind(report)();
                    michal = golfie.done;
                    zuuluu = golfie;
                    if(!michal) { _fun00010_ip = 37; continue _fun00009 }
 82:
                    return entity;
                }
            };
            oscard = verify.bind(offset)(oscard, zuuluu, tangon);
            var _closure2_slot4 = oscard;
            tangon = _closure1_slot3;
            zuuluu = tangon.useMemo;
            michal = new Array(4);
            michal[0] = option;
            michal[1] = golfie;
            michal[2] = oscard;
            michal[3] = report;
            entity = function() {
                michal = global;
                michal = michal.Map;
                zuuluu = michal.prototype;
                zuuluu = Object.create(zuuluu, {constructor: {value: michal}});
                golfie = zuuluu;
                michal = new golfie[michal](oscard);
                michal = michal instanceof Object ? michal : zuuluu;
                var _closure3_slot0 = michal;
                report = _closure2_slot4;
                tangon = report.forEach;
                zuuluu = function(argFoo) {
                    _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                        tangon = argFoo;
                        entity = null;
                        if(!(entity != tangon)) { _fun00012_ip = 32; continue _fun00011 }
 9:
                        zuuluu = _closure3_slot0;
                        michal = zuuluu.set;
                        entity = tangon.id;
                        entity = michal.bind(zuuluu)(entity, tangon);
 32:
                        entity = undefined;
                        return entity;
                    }
                };
                zuuluu = tangon.bind(report)(zuuluu);
                zuuluu = _closure2_slot0;
                michal = zuuluu.map;
                entity = function(argFoo, argBar) {
                    _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                        report = argFoo;
                        michal = _closure2_slot2;
                        entity = argBar;
                        tangon = michal[entity];
                        zuuluu = new Array(0);
                        michal = _closure1_slot8;
                        entity = report.userIds;
                        offset = undefined;
                        verify = michal.bind(offset)(entity);
                        oscard = verify.bind(offset)();
                        michal = oscard.done;
                        entity = null;
                        golfie = oscard;
                        oscard = undefined;
                        if(michal) { _fun00014_ip = 147; continue _fun00013 }
 63:
                        foxtra = golfie.value;
                        romeon = _closure3_slot0;
                        michal = romeon.get;
                        foxtra = michal.bind(romeon)(foxtra);
                        romeon = oscard;
                        if(!(entity != foxtra)) { _fun00014_ip = 129; continue _fun00013 }
 89:
                        michal = _closure2_slot1;
                        romeon = oscard;
                        if(!(entity != michal)) { _fun00014_ip = 129; continue _fun00013 }
 100:
                        michal = _closure2_slot1;
                        michal = michal.bind(offset)(foxtra);
                        romeon = michal;
                        if(!(entity != michal)) { _fun00014_ip = 129; continue _fun00013 }
 116:
                        foxtra = zuuluu.push;
                        foxtra = foxtra.bind(zuuluu)(michal);
                        romeon = michal;
 129:
                        foxtra = verify.bind(offset)();
                        michal = foxtra.done;
                        oscard = romeon;
                        golfie = foxtra;
                        if(!michal) { _fun00014_ip = 63; continue _fun00013 }
 147:
                        michal = entity == tangon;
                        entity = null;
                        if(michal) { _fun00014_ip = 177; continue _fun00013 }
 156:
                        michal = {};
                        michal['embeddedActivity'] = report;
                        michal['application'] = tangon;
                        michal['userParticipantAvatarUrls'] = zuuluu;
                        entity = michal;
 177:
                        return entity;
                    }
                };
                zuuluu = michal.bind(zuuluu)(entity);
                michal = zuuluu.filter;
                report = _closure1_slot0;
                tangon = _closure1_slot2;
                entity = 7;
                tangon = tangon[entity];
                entity = undefined;
                entity = report.bind(entity)(tangon);
                entity = entity.isNotNullish;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            entity = zuuluu.bind(tangon)(entity, michal);
            return entity;
        }
    };
    var _closure1_slot10 = tangon;
    entity = global;
    offset = entity.Object;
    option = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = option.bind(offset)(zuuluu, entity, report);
    entity = 0;
    option = golfie[entity];
    report = argCor;
    entity = undefined;
    report = report.bind(entity)(option);
    var _closure1_slot3 = report;
    report = 1;
    report = golfie[report];
    report = verify.bind(entity)(report);
    var _closure1_slot4 = report;
    report = 2;
    report = golfie[report];
    report = verify.bind(entity)(report);
    var _closure1_slot5 = report;
    report = 3;
    option = golfie[report];
    option = verify.bind(entity)(option);
    var _closure1_slot6 = option;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    report = report.NO_ACTIVITIES;
    var _closure1_slot7 = report;
    report = 8;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/activities/useEmbeddedAppsForChannel.tsx';
    report = oscard.bind(golfie)(report);
    report = function(argFoo, argBar) { // Original name: useEmbeddedAppsForChannel
        michal = argFoo;
        var _closure2_slot0 = michal;
        tangon = _closure1_slot10;
        oscard = _closure1_slot0;
        report = _closure1_slot2;
        zuuluu = 4;
        report = report[zuuluu];
        zuuluu = undefined;
        oscard = oscard.bind(zuuluu)(report);
        report = oscard.useStateFromStoresArray;
        golfie = _closure1_slot6;
        michal = new Array(1);
        michal[0] = golfie;
        entity = function() {
            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                entity = _closure2_slot0;
                zuuluu = null;
                if(!(zuuluu != entity)) { _fun00016_ip = 43; continue _fun00015 }
 13:
                entity = _closure2_slot0;
                entity = entity.id;
                if(!(zuuluu != entity)) { _fun00016_ip = 43; continue _fun00015 }
 26:
                entity = _closure2_slot0;
                zuuluu = entity.id;
                entity = '';
                if(!(entity === zuuluu)) { _fun00016_ip = 52; continue _fun00015 }
 43:
                entity = _closure1_slot7;
                _fun00016_ip = 79; continue _fun00015;
 52:
                tangon = _closure1_slot6;
                zuuluu = tangon.getEmbeddedActivitiesForChannel;
                michal = _closure2_slot0;
                michal = michal.id;
                entity = zuuluu.bind(tangon)(michal);
 79:
                return entity;
            }
        };
        michal = report.bind(oscard)(michal, entity);
        entity = argBar;
        entity = tangon.bind(zuuluu)(michal, entity);
        return entity;
    };
    zuuluu['default'] = report;
    report = function(argFoo) { // Original name: useEmbeddedAppsByChannel
        michal = argFoo;
        var _closure2_slot0 = michal;
        report = _closure1_slot10;
        oscard = _closure1_slot0;
        tangon = _closure1_slot2;
        zuuluu = 4;
        zuuluu = tangon[zuuluu];
        tangon = undefined;
        option = oscard.bind(tangon)(zuuluu);
        golfie = option.useStateFromStores;
        zuuluu = _closure1_slot6;
        oscard = new Array(1);
        oscard[0] = zuuluu;
        zuuluu = function() {
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                zuuluu = _closure2_slot0;
                entity = null;
                if(!(entity == zuuluu)) { _fun00018_ip = 22; continue _fun00017 }
 13:
                entity = _closure1_slot7;
                _fun00018_ip = 44; continue _fun00017;
 22:
                tangon = _closure1_slot6;
                zuuluu = tangon.getEmbeddedActivitiesForGuild;
                michal = _closure2_slot0;
                entity = zuuluu.bind(tangon)(michal);
 44:
                return entity;
            }
        };
        zuuluu = golfie.bind(option)(oscard, zuuluu);
        report = report.bind(tangon)(zuuluu);
        var _closure2_slot1 = report;
        tangon = _closure1_slot3;
        zuuluu = tangon.useMemo;
        michal = new Array(1);
        michal[0] = report;
        entity = function() {
            entity = global;
            entity = entity.Map;
            zuuluu = entity.prototype;
            zuuluu = Object.create(zuuluu, {constructor: {value: entity}});
            oscard = zuuluu;
            entity = new oscard[entity](report);
            entity = entity instanceof Object ? entity : zuuluu;
            var _closure3_slot0 = entity;
            tangon = _closure2_slot1;
            zuuluu = tangon.forEach;
            michal = function(argFoo) {
                _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                    oscard = argFoo;
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot2;
                    entity = 5;
                    michal = michal[entity];
                    entity = undefined;
                    tangon = zuuluu.bind(entity)(michal);
                    zuuluu = tangon.getEmbeddedActivityLocationChannelId;
                    michal = oscard.embeddedActivity;
                    michal = michal.location;
                    report = zuuluu.bind(tangon)(michal);
                    zuuluu = null;
                    if(!(zuuluu != report)) { _fun00020_ip = 106; continue _fun00019 }
 56:
                    golfie = _closure3_slot0;
                    tangon = golfie.get;
                    tangon = tangon.bind(golfie)(report);
                    if(!(zuuluu == tangon)) { _fun00020_ip = 81; continue _fun00019 }
 77:
                    tangon = new Array(0);
 81:
                    zuuluu = tangon.push;
                    zuuluu = zuuluu.bind(tangon)(oscard);
                    zuuluu = _closure3_slot0;
                    michal = zuuluu.set;
                    michal = michal.bind(zuuluu)(report, tangon);
 106:
                    return entity;
                }
            };
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        };
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['useEmbeddedAppsByChannel'] = report;
    zuuluu['useEmbeddedApps'] = tangon;
    michal = function(argFoo) { // Original name: useEmbeddedAppsWithPresence
        offset = argFoo;
        var _closure2_slot0 = offset;
        option = _closure1_slot0;
        verify = _closure1_slot2;
        michal = 4;
        tangon = verify[michal];
        golfie = undefined;
        oscard = option.bind(golfie)(tangon);
        report = oscard.useStateFromStores;
        zuuluu = _closure1_slot4;
        tangon = new Array(1);
        tangon[0] = zuuluu;
        zuuluu = new Array(1);
        zuuluu[0] = offset;
        michal = verify[michal];
        michal = option.bind(golfie)(michal);
        yankee = michal.statesWillNeverBeEqual;
        foxtra = function() {
            entity = global;
            entity = entity.Map;
            zuuluu = entity.prototype;
            zuuluu = Object.create(zuuluu, {constructor: {value: entity}});
            oscard = zuuluu;
            entity = new oscard[entity](report);
            entity = entity instanceof Object ? entity : zuuluu;
            var _closure3_slot0 = entity;
            tangon = _closure2_slot0;
            zuuluu = tangon.forEach;
            michal = function(argFoo) {
                _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                    oscard = argFoo;
                    var _closure4_slot0 = oscard;
                    report = _closure1_slot4;
                    tangon = report.findActivity;
                    option = null;
                    golfie = option == oscard;
                    entity = undefined;
                    zuuluu = undefined;
                    if(golfie) { _fun00022_ip = 70; continue _fun00021 }
 35:
                    golfie = oscard.embeddedActivity;
                    verify = golfie.userIds;
                    golfie = verify.values;
                    verify = golfie.bind(verify)();
                    golfie = verify.next;
                    golfie = golfie.bind(verify)();
                    zuuluu = golfie.value;
 70:
                    michal = function(argFoo) {
                        _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                            entity = argFoo;
                            michal = entity.application_id;
                            entity = _closure4_slot0;
                            tangon = null;
                            oscard = tangon == entity;
                            entity = undefined;
                            if(oscard) { _fun00024_ip = 50; continue _fun00023 }
 27:
                            zuuluu = _closure4_slot0;
                            zuuluu = zuuluu.application;
                            tangon = tangon == zuuluu;
                            entity = undefined;
                            if(tangon) { _fun00024_ip = 50; continue _fun00023 }
 45:
                            entity = zuuluu.id;
 50:
                            entity = michal === entity;
                            return entity;
                        }
                    };
                    golfie = tangon.bind(report)(zuuluu, michal);
                    report = _closure3_slot0;
                    tangon = report.set;
                    michal = option == oscard;
                    zuuluu = undefined;
                    if(michal) { _fun00022_ip = 123; continue _fun00021 }
 104:
                    michal = oscard.application;
                    option = option == michal;
                    zuuluu = undefined;
                    if(option) { _fun00022_ip = 123; continue _fun00021 }
 118:
                    zuuluu = michal.id;
 123:
                    michal = {};
                    yankee = michal;
                    offset = oscard;
                    oscard = copyDataProperties(yankee, offset);
                    oscard = 'presenceActivity';
                    michal[oscard] = golfie;
                    michal = tangon.bind(report)(zuuluu, michal);
                    return entity;
                }
            };
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        };
        kiloes = oscard;
        backup = tangon;
        romeon = zuuluu;
        entity = kiloes[report](backup, foxtra, romeon, yankee, offset);
        return entity;
    };
    zuuluu['useEmbeddedAppsWithPresence'] = michal;
    return entity;
})();