// app/utils/ChannelSortingUtils.tsx
export default (function(argFoo, argBar, argBaz, argCor, argGra, argFre, argPlu) {
    oscard = argBar;
    zuuluu = argFre;
    golfie = argPlu;
    entity = argBaz;
    var _closure1_slot0 = entity;
    var _closure1_slot1 = golfie;
    tangon = function(argFoo, argBar) { // Original name: areTypesInSameSection
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            golfie = argFoo;
            oscard = argBar;
            michal = null;
            entity = michal != golfie;
            if(!entity) { _fun00002_ip = 19; continue _fun00001 }
 15:
            entity = michal != oscard;
 19:
            if(!entity) { _fun00002_ip = 93; continue _fun00001 }
 22:
            michal = golfie === oscard;
            if(michal) { _fun00002_ip = 58; continue _fun00001 }
 29:
            zuuluu = _closure1_slot2;
            report = undefined;
            zuuluu = zuuluu.bind(report)(golfie);
            if(!zuuluu) { _fun00002_ip = 55; continue _fun00001 }
 46:
            tangon = _closure1_slot2;
            zuuluu = tangon.bind(report)(oscard);
 55:
            michal = zuuluu;
 58:
            if(michal) { _fun00002_ip = 90; continue _fun00001 }
 61:
            zuuluu = _closure1_slot3;
            report = undefined;
            zuuluu = zuuluu.bind(report)(golfie);
            if(!zuuluu) { _fun00002_ip = 87; continue _fun00001 }
 78:
            tangon = _closure1_slot3;
            zuuluu = tangon.bind(report)(oscard);
 87:
            michal = zuuluu;
 90:
            entity = michal;
 93:
            return entity;
        }
    };
    var _closure1_slot5 = tangon;
    entity = function(argFoo, argBar, argBaz, argCor) { // Original name: getFirstChannelOfType
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            verify = argFoo;
            option = argBaz;
            golfie = argCor;
            michal = argBar;
            var _closure2_slot0 = michal;
            michal = -1;
            var _closure2_slot1 = michal;
            zuuluu = golfie.find;
            michal = function(argFoo, argBar) {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    entity = argFoo;
                    entity = entity.channel;
                    michal = entity.id;
                    entity = _closure2_slot0;
                    entity = michal === entity;
                    if(!entity) { _fun00006_ip = 36; continue _fun00005 }
 27:
                    michal = argBar;
                    _closure2_slot1 = michal;
                    entity = true;
 36:
                    return entity;
                }
            };
            michal = zuuluu.bind(golfie)(michal);
            michal = _closure2_slot1;
            oscard = 0;
            if(!(!(michal < oscard))) { _fun00004_ip = 127; continue _fun00003 }
 55:
            report = _closure2_slot1;
            if(!(report >= oscard)) { _fun00004_ip = 121; continue _fun00003 }
 63:
            entity = golfie.length;
            zuuluu = undefined;
            if(!(report < entity)) { _fun00004_ip = 121; continue _fun00003 }
 77:
            entity = golfie[report];
            offset = _closure1_slot5;
            michal = entity.channel;
            michal = michal.type;
            michal = offset.bind(zuuluu)(michal, option);
            if(michal) { _fun00004_ip = 125; continue _fun00003 }
 104:
            report = report + verify;
            if(!(report >= oscard)) { _fun00004_ip = 121; continue _fun00003 }
 112:
            michal = golfie.length;
            if(report < michal) { _fun00004_ip = 77; continue _fun00003 }
 121:
            michal = null;
            return michal;
 125:
            return entity;
 127:
            entity = null;
            return entity;
        }
    };
    var _closure1_slot6 = entity;
    entity = function(argFoo, argBar) { // Original name: getChannelPosition
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            zuuluu = argFoo;
            tangon = argBar;
            report = arguments[2];
            var _closure2_slot0 = zuuluu;
            michal = undefined;
            if(!(report === michal)) { _fun00008_ip = 23; continue _fun00007 }
 21:
            report = false;
 23:
            var _closure2_slot1 = report;
            var _closure2_slot2 = michal;
            michal = null;
            if(!(michal != zuuluu)) { _fun00008_ip = 81; continue _fun00007 }
 37:
            _closure2_slot2 = michal;
            zuuluu = tangon.filter;
            michal = function(argFoo) {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    entity = argFoo;
                    entity = entity.channel;
                    oscard = entity.type;
                    michal = _closure2_slot0;
                    entity = null;
                    entity = entity != michal;
                    if(!entity) { _fun00010_ip = 63; continue _fun00009 }
 29:
                    michal = _closure2_slot1;
                    if(michal) { _fun00010_ip = 60; continue _fun00009 }
 36:
                    report = _closure1_slot5;
                    zuuluu = _closure2_slot0;
                    tangon = zuuluu.type;
                    zuuluu = undefined;
                    michal = report.bind(zuuluu)(tangon, oscard);
 60:
                    entity = michal;
 63:
                    return entity;
                }
            };
            tangon = zuuluu.bind(tangon)(michal);
            zuuluu = tangon.find;
            michal = function(argFoo, argBar) {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    entity = argFoo;
                    entity = entity.channel;
                    tangon = entity.id;
                    michal = _closure2_slot0;
                    entity = null;
                    entity = entity != michal;
                    if(!entity) { _fun00012_ip = 42; continue _fun00011 }
 29:
                    michal = _closure2_slot0;
                    michal = michal.id;
                    entity = tangon === michal;
 42:
                    if(!entity) { _fun00012_ip = 54; continue _fun00011 }
 45:
                    michal = argBar;
                    _closure2_slot2 = michal;
                    entity = true;
 54:
                    return entity;
                }
            };
            michal = zuuluu.bind(tangon)(michal);
            entity = _closure2_slot2;
            return entity;
 81:
            entity = 0;
            return entity;
        }
    };
    var _closure1_slot7 = entity;
    entity = function(argFoo) { // Original name: hoverSameType
        michal = argFoo;
        entity = {};
        zuuluu = michal.id;
        entity['referenceId'] = zuuluu;
        michal = michal.parent_id;
        entity['parentId'] = michal;
        return entity;
    };
    var _closure1_slot8 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, report);
    entity = 0;
    report = golfie[entity];
    entity = undefined;
    report = oscard.bind(entity)(report);
    option = report.isGuildSelectableChannelType;
    var _closure1_slot2 = option;
    report = report.isGuildVocalChannelType;
    var _closure1_slot3 = report;
    report = 1;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    report = report.ChannelTypes;
    var _closure1_slot4 = report;
    report = 4;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'utils/ChannelSortingUtils.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['areTypesInSameSection'] = tangon;
    tangon = function(argFoo, argBar, argBaz, argCor, argGra) { // Original name: getDropData
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            option = argFoo;
            report = argBar;
            oscard = argBaz;
            zuuluu = argCor;
            backup = argGra;
            entity = null;
            if(!(entity != option)) { _fun00014_ip = 1377; continue _fun00013 }
 24:
            if(!(entity != oscard)) { _fun00014_ip = 1377; continue _fun00013 }
 31:
            michal = _closure1_slot4;
            offset = michal.GUILD_CATEGORY;
            michal = option.type;
            if(!(michal !== offset)) { _fun00014_ip = 1161; continue _fun00013 }
 56:
            yankee = _closure1_slot5;
            golfie = option.type;
            michal = oscard.type;
            verify = undefined;
            michal = yankee.bind(verify)(golfie, michal);
            if(michal) { _fun00014_ip = 1147; continue _fun00013 }
 84:
            if(!(!(zuuluu < report))) { _fun00014_ip = 657; continue _fun00013 }
 91:
            michal = oscard.type;
            if(!(michal !== offset)) { _fun00014_ip = 382; continue _fun00013 }
 103:
            golfie = _closure1_slot7;
            michal = true;
            michal = golfie.bind(verify)(oscard, backup, michal);
            yankee = entity != michal;
            golfie = 0;
            if(!yankee) { _fun00014_ip = 128; continue _fun00013 }
 125:
            golfie = michal;
 128:
            michal = 1;
            michal = golfie + michal;
            romeon = backup[michal];
            foxtra = _closure1_slot6;
            echoed = oscard.id;
            result = option.type;
            update = -1;
            source = undefined;
            output = backup;
            yankee = source[foxtra](update, echoed, result, output, sizing);
            golfie = entity == yankee;
            michal = null;
            if(golfie) { _fun00014_ip = 377; continue _fun00013 }
 180:
            golfie = option.isGuildVocal;
            golfie = golfie.bind(option)();
            if(!golfie) { _fun00014_ip = 239; continue _fun00013 }
 193:
            if(!(entity != romeon)) { _fun00014_ip = 346; continue _fun00013 }
 200:
            foxtra = romeon.channel;
            golfie = foxtra.isCategory;
            golfie = golfie.bind(foxtra)();
            if(golfie) { _fun00014_ip = 346; continue _fun00013 }
 221:
            foxtra = romeon.channel;
            golfie = foxtra.isGuildVocal;
            golfie = golfie.bind(foxtra)();
            if(golfie) { _fun00014_ip = 308; continue _fun00013 }
 239:
            golfie = option.isCategory;
            foxtra = golfie.bind(option)();
            golfie = null;
            if(!foxtra) { _fun00014_ip = 303; continue _fun00013 }
 254:
            if(!(entity != romeon)) { _fun00014_ip = 278; continue _fun00013 }
 258:
            kiloes = romeon.channel;
            foxtra = kiloes.isCategory;
            foxtra = foxtra.bind(kiloes)();
            golfie = null;
            if(!foxtra) { _fun00014_ip = 303; continue _fun00013 }
 278:
            foxtra = {};
            kiloes = yankee.channel;
            kiloes = kiloes.id;
            foxtra['referenceId'] = kiloes;
            foxtra['parentId'] = entity;
            golfie = foxtra;
 303:
            michal = golfie;
            _fun00014_ip = 377; continue _fun00013;
 308:
            golfie = {};
            foxtra = yankee.channel;
            foxtra = foxtra.id;
            golfie['referenceId'] = foxtra;
            romeon = romeon.channel;
            romeon = romeon.parent_id;
            golfie['parentId'] = romeon;
            michal = golfie;
            _fun00014_ip = 377; continue _fun00013;
 346:
            golfie = {};
            yankee = yankee.channel;
            yankee = yankee.id;
            golfie['referenceId'] = yankee;
            yankee = oscard.parent_id;
            golfie['parentId'] = yankee;
            michal = golfie;
 377:
            _fun00014_ip = 652; continue _fun00013;
 382:
            yankee = _closure1_slot7;
            golfie = true;
            golfie = yankee.bind(verify)(oscard, backup, golfie);
            romeon = entity != golfie;
            yankee = 0;
            if(!romeon) { _fun00014_ip = 407; continue _fun00013 }
 404:
            yankee = golfie;
 407:
            golfie = 1;
            golfie = yankee + golfie;
            foxtra = backup[golfie];
            kiloes = _closure1_slot6;
            echoed = oscard.id;
            result = option.type;
            update = -1;
            source = undefined;
            output = backup;
            romeon = source[kiloes](update, echoed, result, output, sizing);
            yankee = entity != romeon;
            golfie = null;
            if(!yankee) { _fun00014_ip = 649; continue _fun00013 }
 459:
            if(!(entity != foxtra)) { _fun00014_ip = 619; continue _fun00013 }
 466:
            sizing = _closure1_slot5;
            yankee = foxtra.channel;
            kiloes = yankee.type;
            yankee = option.type;
            yankee = sizing.bind(verify)(kiloes, yankee);
            if(yankee) { _fun00014_ip = 581; continue _fun00013 }
 494:
            kiloes = _closure1_slot2;
            yankee = option.type;
            yankee = kiloes.bind(verify)(yankee);
            if(!yankee) { _fun00014_ip = 529; continue _fun00013 }
 511:
            kiloes = foxtra.channel;
            yankee = kiloes.isGuildVocal;
            yankee = yankee.bind(kiloes)();
            if(yankee) { _fun00014_ip = 581; continue _fun00013 }
 529:
            kiloes = foxtra.channel;
            yankee = kiloes.isCategory;
            yankee = yankee.bind(kiloes)();
            golfie = null;
            if(!yankee) { _fun00014_ip = 649; continue _fun00013 }
 549:
            yankee = {};
            kiloes = romeon.channel;
            kiloes = kiloes.id;
            yankee['referenceId'] = kiloes;
            kiloes = oscard.id;
            yankee['parentId'] = kiloes;
            golfie = yankee;
            _fun00014_ip = 649; continue _fun00013;
 581:
            yankee = {};
            kiloes = romeon.channel;
            kiloes = kiloes.id;
            yankee['referenceId'] = kiloes;
            foxtra = foxtra.channel;
            foxtra = foxtra.parent_id;
            yankee['parentId'] = foxtra;
            golfie = yankee;
            _fun00014_ip = 649; continue _fun00013;
 619:
            yankee = {};
            romeon = romeon.channel;
            romeon = romeon.id;
            yankee['referenceId'] = romeon;
            romeon = oscard.id;
            yankee['parentId'] = romeon;
            golfie = yankee;
 649:
            michal = golfie;
 652:
            _fun00014_ip = 1145; continue _fun00013;
 657:
            golfie = oscard.type;
            if(!(golfie !== offset)) { _fun00014_ip = 890; continue _fun00013 }
 669:
            offset = _closure1_slot7;
            golfie = true;
            offset = offset.bind(verify)(oscard, backup, golfie);
            yankee = entity != offset;
            golfie = 0;
            if(!yankee) { _fun00014_ip = 694; continue _fun00013 }
 691:
            golfie = offset;
 694:
            foxtra = 1;
            golfie = golfie - foxtra;
            yankee = backup[golfie];
            romeon = _closure1_slot6;
            echoed = oscard.id;
            result = option.type;
            source = undefined;
            update = foxtra;
            output = backup;
            romeon = source[romeon](update, echoed, result, output, sizing);
            if(!(entity == yankee)) { _fun00014_ip = 781; continue _fun00013 }
 735:
            golfie = option.isGuildVocal;
            golfie = golfie.bind(option)();
            if(golfie) { _fun00014_ip = 781; continue _fun00013 }
 748:
            golfie = {};
            foxtra = entity != romeon;
            offset = null;
            if(!foxtra) { _fun00014_ip = 769; continue _fun00013 }
 759:
            foxtra = romeon.channel;
            offset = foxtra.id;
 769:
            golfie['referenceId'] = offset;
            golfie['parentId'] = entity;
            _fun00014_ip = 885; continue _fun00013;
 781:
            foxtra = _closure1_slot2;
            offset = option.type;
            foxtra = foxtra.bind(verify)(offset);
            offset = null;
            if(!foxtra) { _fun00014_ip = 882; continue _fun00013 }
 800:
            foxtra = entity != romeon;
            offset = null;
            if(!foxtra) { _fun00014_ip = 882; continue _fun00013 }
 809:
            kiloes = _closure1_slot2;
            foxtra = yankee.channel;
            foxtra = foxtra.type;
            foxtra = kiloes.bind(verify)(foxtra);
            if(foxtra) { _fun00014_ip = 851; continue _fun00013 }
 831:
            foxtra = yankee.channel;
            yankee = foxtra.isCategory;
            yankee = yankee.bind(foxtra)();
            offset = null;
            if(!yankee) { _fun00014_ip = 882; continue _fun00013 }
 851:
            yankee = {};
            romeon = romeon.channel;
            romeon = romeon.id;
            yankee['referenceId'] = romeon;
            romeon = oscard.parent_id;
            yankee['parentId'] = romeon;
            offset = yankee;
 882:
            golfie = offset;
 885:
            _fun00014_ip = 1142; continue _fun00013;
 890:
            yankee = _closure1_slot7;
            offset = true;
            yankee = yankee.bind(verify)(oscard, backup, offset);
            romeon = entity != yankee;
            offset = 0;
            if(!romeon) { _fun00014_ip = 915; continue _fun00013 }
 912:
            offset = yankee;
 915:
            kiloes = 1;
            offset = offset - kiloes;
            romeon = backup[offset];
            foxtra = _closure1_slot6;
            echoed = oscard.id;
            result = option.type;
            source = undefined;
            update = kiloes;
            output = backup;
            foxtra = source[foxtra](update, echoed, result, output, sizing);
            if(!(entity != romeon)) { _fun00014_ip = 1129; continue _fun00013 }
 959:
            yankee = entity != foxtra;
            offset = null;
            if(!yankee) { _fun00014_ip = 1139; continue _fun00013 }
 971:
            sizing = _closure1_slot5;
            yankee = romeon.channel;
            kiloes = yankee.type;
            yankee = option.type;
            yankee = sizing.bind(verify)(kiloes, yankee);
            if(yankee) { _fun00014_ip = 1091; continue _fun00013 }
 999:
            yankee = option.isGuildVocal;
            yankee = yankee.bind(option)();
            if(!yankee) { _fun00014_ip = 1034; continue _fun00013 }
 1012:
            kiloes = _closure1_slot2;
            yankee = romeon.channel;
            yankee = yankee.type;
            yankee = kiloes.bind(verify)(yankee);
            if(yankee) { _fun00014_ip = 1091; continue _fun00013 }
 1034:
            kiloes = romeon.channel;
            yankee = kiloes.isCategory;
            yankee = yankee.bind(kiloes)();
            offset = null;
            if(!yankee) { _fun00014_ip = 1139; continue _fun00013 }
 1054:
            yankee = {};
            kiloes = foxtra.channel;
            kiloes = kiloes.id;
            yankee['referenceId'] = kiloes;
            kiloes = romeon.channel;
            kiloes = kiloes.id;
            yankee['parentId'] = kiloes;
            offset = yankee;
            _fun00014_ip = 1139; continue _fun00013;
 1091:
            yankee = {};
            foxtra = foxtra.channel;
            foxtra = foxtra.id;
            yankee['referenceId'] = foxtra;
            romeon = romeon.channel;
            romeon = romeon.parent_id;
            yankee['parentId'] = romeon;
            offset = yankee;
            _fun00014_ip = 1139; continue _fun00013;
 1129:
            offset = {'referenceId': null, 'parentId': null};
 1139:
            golfie = offset;
 1142:
            michal = golfie;
 1145:
            _fun00014_ip = 1156; continue _fun00013;
 1147:
            golfie = _closure1_slot8;
            michal = golfie.bind(verify)(oscard);
 1156:
            _fun00014_ip = 1375; continue _fun00013;
 1161:
            if(!(zuuluu !== report)) { _fun00014_ip = 1361; continue _fun00013 }
 1168:
            if(!(zuuluu < report)) { _fun00014_ip = 1189; continue _fun00013 }
 1172:
            verify = option.type;
            golfie = oscard.type;
            if(!(verify !== golfie)) { _fun00014_ip = 1361; continue _fun00013 }
 1189:
            report = zuuluu > report;
            zuuluu = null;
            if(!report) { _fun00014_ip = 1359; continue _fun00013 }
 1201:
            report = _closure1_slot4;
            offset = report.GUILD_CATEGORY;
            golfie = _closure1_slot7;
            foxtra = undefined;
            report = true;
            report = golfie.bind(foxtra)(oscard, backup, report);
            verify = entity != report;
            golfie = 0;
            if(!verify) { _fun00014_ip = 1238; continue _fun00013 }
 1235:
            golfie = report;
 1238:
            report = 1;
            report = golfie + report;
            golfie = backup[report];
            romeon = _closure1_slot6;
            echoed = oscard.id;
            result = option.type;
            update = -1;
            source = undefined;
            output = backup;
            verify = source[romeon](update, echoed, result, output, sizing);
            yankee = entity == verify;
            report = null;
            if(yankee) { _fun00014_ip = 1356; continue _fun00013 }
 1287:
            yankee = verify.channel;
            yankee = yankee.id;
            option = option.id;
            report = null;
            if(!(yankee !== option)) { _fun00014_ip = 1356; continue _fun00013 }
 1308:
            if(!(entity != golfie)) { _fun00014_ip = 1328; continue _fun00013 }
 1312:
            golfie = golfie.channel;
            option = golfie.type;
            golfie = null;
            if(!(option === offset)) { _fun00014_ip = 1353; continue _fun00013 }
 1328:
            option = {};
            verify = verify.channel;
            verify = verify.id;
            option['referenceId'] = verify;
            option['parentId'] = entity;
            golfie = option;
 1353:
            report = golfie;
 1356:
            zuuluu = report;
 1359:
            _fun00014_ip = 1372; continue _fun00013;
 1361:
            report = _closure1_slot8;
            tangon = undefined;
            zuuluu = report.bind(tangon)(oscard);
 1372:
            michal = zuuluu;
 1375:
            return michal;
 1377:
            return entity;
        }
    };
    zuuluu['getDropData'] = tangon;
    michal = function(argFoo, argBar, argBaz, argCor) { // Original name: getDnDUpdates
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            oscard = argFoo;
            option = argBar;
            report = argBaz;
            yankee = argCor;
            var _closure2_slot0 = oscard;
            var _closure2_slot1 = report;
            michal = new Array(0);
            var _closure2_slot4 = michal;
            michal = new Array(0);
            verify = yankee._categories;
            tangon = function(argFoo) { // Original name: generateUpdates
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    verify = argFoo;
                    entity = _closure2_slot2;
                    tangon = null;
                    if(!(tangon != entity)) { _fun00018_ip = 90; continue _fun00017 }
 18:
                    entity = _closure2_slot3;
                    if(!(tangon != entity)) { _fun00018_ip = 90; continue _fun00017 }
 26:
                    oscard = _closure2_slot0;
                    report = _closure2_slot2;
                    michal = _closure2_slot3;
                    entity = tangon != report;
                    if(!entity) { _fun00018_ip = 49; continue _fun00017 }
 45:
                    entity = tangon != michal;
 49:
                    if(!entity) { _fun00018_ip = 60; continue _fun00017 }
 52:
                    golfie = verify[report];
                    entity = tangon != golfie;
 60:
                    if(!entity) { _fun00018_ip = 76; continue _fun00017 }
 63:
                    report = verify[report];
                    report = report.channel;
                    entity = report === oscard;
 76:
                    if(!entity) { _fun00018_ip = 87; continue _fun00017 }
 79:
                    michal = verify[michal];
                    entity = tangon != michal;
 87:
                    if(entity) { _fun00018_ip = 108; continue _fun00017 }
 90:
                    entity = new Array(0);
                    offset = 0;
                    romeon = entity;
                    yankee = verify;
                    michal = arraySpread(romeon, yankee, offset);
                    _fun00018_ip = 154; continue _fun00017;
 108:
                    report = _closure1_slot0;
                    tangon = _closure1_slot1;
                    michal = 2;
                    tangon = tangon[michal];
                    michal = undefined;
                    oscard = report.bind(michal)(tangon);
                    report = oscard.moveItemFromTo;
                    tangon = _closure2_slot2;
                    michal = _closure2_slot3;
                    entity = report.bind(oscard)(verify, tangon, michal);
 154:
                    report = _closure2_slot4;
                    tangon = report.concat;
                    golfie = _closure1_slot0;
                    oscard = _closure1_slot1;
                    michal = 2;
                    oscard = oscard[michal];
                    michal = undefined;
                    golfie = golfie.bind(michal)(oscard);
                    oscard = golfie.calculatePositionDeltas;
                    michal = {};
                    michal['oldOrdering'] = verify;
                    michal['newOrdering'] = entity;
                    verify = function(argFoo) { // Original name: idGetter
                        entity = argFoo;
                        entity = entity.channel;
                        entity = entity.id;
                        return entity;
                    };
                    michal['idGetter'] = verify;
                    option = function(argFoo) { // Original name: existingPositionGetter
                        entity = argFoo;
                        entity = entity.channel;
                        entity = entity.position;
                        return entity;
                    };
                    michal['existingPositionGetter'] = option;
                    michal = oscard.bind(golfie)(michal);
                    michal = tangon.bind(report)(michal);
                    _closure2_slot4 = michal;
                    return entity;
                }
            };
            zuuluu = oscard.isCategory;
            zuuluu = zuuluu.bind(oscard)();
            if(!zuuluu) { _fun00016_ip = 143; continue _fun00015 }
 60:
            romeon = new Array(0);
            golfie = 0;
            output = romeon;
            sizing = verify;
            kiloes = 0;
            zuuluu = arraySpread(output, sizing, kiloes);
            offset = romeon.slice;
            zuuluu = 1;
            offset = offset.bind(romeon)(zuuluu);
            romeon = _closure1_slot7;
            zuuluu = undefined;
            foxtra = romeon.bind(zuuluu)(oscard, offset);
            var _closure2_slot2 = foxtra;
            romeon = romeon.bind(zuuluu)(option, offset);
            var _closure2_slot3 = romeon;
            zuuluu = tangon.bind(zuuluu)(offset);
            offset = zuuluu.unshift;
            golfie = verify[golfie];
            golfie = offset.bind(zuuluu)(golfie);
            michal = zuuluu;
 143:
            romeon = _closure1_slot2;
            offset = oscard.type;
            zuuluu = undefined;
            offset = romeon.bind(zuuluu)(offset);
            if(offset) { _fun00016_ip = 178; continue _fun00015 }
 165:
            offset = oscard.isCategory;
            offset = offset.bind(oscard)();
            if(!offset) { _fun00016_ip = 258; continue _fun00015 }
 178:
            romeon = _closure1_slot0;
            foxtra = _closure1_slot1;
            offset = 3;
            offset = foxtra[offset];
            foxtra = romeon.bind(zuuluu)(offset);
            backup = michal.length;
            offset = 0;
            romeon = verify;
            if(!(backup > offset)) { _fun00016_ip = 215; continue _fun00015 }
 212:
            romeon = michal;
 215:
            offset = function(argFoo) {
                entity = argFoo;
                entity = entity.channel;
                zuuluu = entity.type;
                michal = _closure1_slot2;
                entity = undefined;
                entity = michal.bind(entity)(zuuluu);
                return entity;
            };
            offset = foxtra.bind(zuuluu)(romeon, yankee, offset);
            romeon = _closure1_slot7;
            foxtra = romeon.bind(zuuluu)(oscard, offset);
            _closure2_slot2 = foxtra;
            romeon = romeon.bind(zuuluu)(option, offset);
            _closure2_slot3 = romeon;
            offset = tangon.bind(zuuluu)(offset);
 258:
            offset = oscard.isGuildVocal;
            offset = offset.bind(oscard)();
            if(offset) { _fun00016_ip = 284; continue _fun00015 }
 271:
            offset = oscard.isCategory;
            offset = offset.bind(oscard)();
            if(!offset) { _fun00016_ip = 361; continue _fun00015 }
 284:
            romeon = _closure1_slot0;
            foxtra = _closure1_slot1;
            offset = 3;
            offset = foxtra[offset];
            offset = romeon.bind(zuuluu)(offset);
            foxtra = michal.length;
            romeon = 0;
            if(!(foxtra > romeon)) { _fun00016_ip = 318; continue _fun00015 }
 315:
            verify = michal;
 318:
            michal = function(argFoo) {
                entity = argFoo;
                michal = entity.channel;
                entity = michal.isGuildVocal;
                entity = entity.bind(michal)();
                return entity;
            };
            michal = offset.bind(zuuluu)(verify, yankee, michal);
            golfie = _closure1_slot7;
            verify = golfie.bind(zuuluu)(oscard, michal);
            _closure2_slot2 = verify;
            golfie = golfie.bind(zuuluu)(option, michal);
            _closure2_slot3 = golfie;
            michal = tangon.bind(zuuluu)(michal);
 361:
            michal = oscard.parent_id;
            if(!(michal !== report)) { _fun00016_ip = 435; continue _fun00015 }
 371:
            michal = false;
            var _closure2_slot5 = michal;
            tangon = _closure2_slot4;
            zuuluu = tangon.find;
            michal = function(argFoo) {
                _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                    tangon = argFoo;
                    michal = tangon.id;
                    entity = _closure2_slot0;
                    entity = entity.id;
                    entity = michal === entity;
                    if(!entity) { _fun00020_ip = 45; continue _fun00019 }
 27:
                    michal = _closure2_slot1;
                    tangon['parent_id'] = michal;
                    michal = true;
                    _closure2_slot5 = michal;
                    entity = true;
 45:
                    return entity;
                }
            };
            michal = zuuluu.bind(tangon)(michal);
            michal = _closure2_slot5;
            if(michal) { _fun00016_ip = 435; continue _fun00015 }
 405:
            tangon = _closure2_slot4;
            zuuluu = tangon.push;
            michal = {};
            oscard = oscard.id;
            michal['id'] = oscard;
            michal['parent_id'] = report;
            michal = zuuluu.bind(tangon)(michal);
 435:
            entity = _closure2_slot4;
            return entity;
        }
    };
    zuuluu['getDnDUpdates'] = michal;
    return entity;
})();