// app/utils/ChannelSortingUtils.tsx
export default (function(argFoo, argBar, argBaz, argCorge, argGrault, argFred, argPlugh) {
    oscar = argBar;
    zulu = argFred;
    golf = argPlugh;
    entity = argBaz;
    var _closure1_slot0 = entity;
    var _closure1_slot1 = golf;
    tango = function(argFoo, argBar) { // Original name: areTypesInSameSection
        _fun125872: for(var _fun125872_ip = 0; ; ) switch(_fun125872_ip) {
 0:
            golf = argFoo;
            oscar = argBar;
            mike = null;
            entity = mike != golf;
            if(!entity) { _fun125872_ip = 19; continue _fun125872 }
 15:
            entity = mike != oscar;
 19:
            if(!entity) { _fun125872_ip = 93; continue _fun125872 }
 22:
            mike = golf === oscar;
            if(mike) { _fun125872_ip = 58; continue _fun125872 }
 29:
            zulu = _closure1_slot2;
            report = undefined;
            zulu = zulu.bind(report)(golf);
            if(!zulu) { _fun125872_ip = 55; continue _fun125872 }
 46:
            tango = _closure1_slot2;
            zulu = tango.bind(report)(oscar);
 55:
            mike = zulu;
 58:
            if(mike) { _fun125872_ip = 90; continue _fun125872 }
 61:
            zulu = _closure1_slot3;
            report = undefined;
            zulu = zulu.bind(report)(golf);
            if(!zulu) { _fun125872_ip = 87; continue _fun125872 }
 78:
            tango = _closure1_slot3;
            zulu = tango.bind(report)(oscar);
 87:
            mike = zulu;
 90:
            entity = mike;
 93:
            return entity;
        }
    };
    var _closure1_slot5 = tango;
    entity = function(argFoo, argBar, argBaz, argCorge) { // Original name: getFirstChannelOfType
        _fun125873: for(var _fun125873_ip = 0; ; ) switch(_fun125873_ip) {
 0:
            verify = argFoo;
            options = argBaz;
            golf = argCorge;
            mike = argBar;
            var _closure2_slot0 = mike;
            mike = -1;
            var _closure2_slot1 = mike;
            zulu = golf.find;
            mike = function(argFoo, argBar) {
                _fun125874: for(var _fun125874_ip = 0; ; ) switch(_fun125874_ip) {
 0:
                    entity = argFoo;
                    entity = entity.channel;
                    mike = entity.id;
                    entity = _closure2_slot0;
                    entity = mike === entity;
                    if(!entity) { _fun125874_ip = 36; continue _fun125874 }
 27:
                    mike = argBar;
                    _closure2_slot1 = mike;
                    entity = true;
 36:
                    return entity;
                }
            };
            mike = zulu.bind(golf)(mike);
            mike = _closure2_slot1;
            oscar = 0;
            if(!(!(mike < oscar))) { _fun125873_ip = 127; continue _fun125873 }
 55:
            report = _closure2_slot1;
            if(!(report >= oscar)) { _fun125873_ip = 121; continue _fun125873 }
 63:
            entity = golf.length;
            zulu = undefined;
            if(!(report < entity)) { _fun125873_ip = 121; continue _fun125873 }
 77:
            entity = golf[report];
            offset = _closure1_slot5;
            mike = entity.channel;
            mike = mike.type;
            mike = offset.bind(zulu)(mike, options);
            if(mike) { _fun125873_ip = 125; continue _fun125873 }
 104:
            report = report + verify;
            if(!(report >= oscar)) { _fun125873_ip = 121; continue _fun125873 }
 112:
            mike = golf.length;
            if(report < mike) { _fun125873_ip = 77; continue _fun125873 }
 121:
            mike = null;
            return mike;
 125:
            return entity;
 127:
            entity = null;
            return entity;
        }
    };
    var _closure1_slot6 = entity;
    entity = function(argFoo, argBar) { // Original name: getChannelPosition
        _fun125875: for(var _fun125875_ip = 0; ; ) switch(_fun125875_ip) {
 0:
            zulu = argFoo;
            tango = argBar;
            report = arguments[2];
            var _closure2_slot0 = zulu;
            mike = undefined;
            if(!(report === mike)) { _fun125875_ip = 23; continue _fun125875 }
 21:
            report = false;
 23:
            var _closure2_slot1 = report;
            var _closure2_slot2 = mike;
            mike = null;
            if(!(mike != zulu)) { _fun125875_ip = 81; continue _fun125875 }
 37:
            _closure2_slot2 = mike;
            zulu = tango.filter;
            mike = function(argFoo) {
                _fun125876: for(var _fun125876_ip = 0; ; ) switch(_fun125876_ip) {
 0:
                    entity = argFoo;
                    entity = entity.channel;
                    oscar = entity.type;
                    mike = _closure2_slot0;
                    entity = null;
                    entity = entity != mike;
                    if(!entity) { _fun125876_ip = 63; continue _fun125876 }
 29:
                    mike = _closure2_slot1;
                    if(mike) { _fun125876_ip = 60; continue _fun125876 }
 36:
                    report = _closure1_slot5;
                    zulu = _closure2_slot0;
                    tango = zulu.type;
                    zulu = undefined;
                    mike = report.bind(zulu)(tango, oscar);
 60:
                    entity = mike;
 63:
                    return entity;
                }
            };
            tango = zulu.bind(tango)(mike);
            zulu = tango.find;
            mike = function(argFoo, argBar) {
                _fun125877: for(var _fun125877_ip = 0; ; ) switch(_fun125877_ip) {
 0:
                    entity = argFoo;
                    entity = entity.channel;
                    tango = entity.id;
                    mike = _closure2_slot0;
                    entity = null;
                    entity = entity != mike;
                    if(!entity) { _fun125877_ip = 42; continue _fun125877 }
 29:
                    mike = _closure2_slot0;
                    mike = mike.id;
                    entity = tango === mike;
 42:
                    if(!entity) { _fun125877_ip = 54; continue _fun125877 }
 45:
                    mike = argBar;
                    _closure2_slot2 = mike;
                    entity = true;
 54:
                    return entity;
                }
            };
            mike = zulu.bind(tango)(mike);
            entity = _closure2_slot2;
            return entity;
 81:
            entity = 0;
            return entity;
        }
    };
    var _closure1_slot7 = entity;
    entity = function(argFoo) { // Original name: hoverSameType
        mike = argFoo;
        entity = {};
        zulu = mike.id;
        entity['referenceId'] = zulu;
        mike = mike.parent_id;
        entity['parentId'] = mike;
        return entity;
    };
    var _closure1_slot8 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, report);
    entity = 0;
    report = golf[entity];
    entity = undefined;
    report = oscar.bind(entity)(report);
    options = report.isGuildSelectableChannelType;
    var _closure1_slot2 = options;
    report = report.isGuildVocalChannelType;
    var _closure1_slot3 = report;
    report = 1;
    report = golf[report];
    report = oscar.bind(entity)(report);
    report = report.ChannelTypes;
    var _closure1_slot4 = report;
    report = 4;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'utils/ChannelSortingUtils.tsx';
    report = oscar.bind(golf)(report);
    zulu['areTypesInSameSection'] = tango;
    tango = function(argFoo, argBar, argBaz, argCorge, argGrault) { // Original name: getDropData
        _fun125879: for(var _fun125879_ip = 0; ; ) switch(_fun125879_ip) {
 0:
            options = argFoo;
            report = argBar;
            oscar = argBaz;
            zulu = argCorge;
            backup = argGrault;
            entity = null;
            if(!(entity != options)) { _fun125879_ip = 1381; continue _fun125879 }
 24:
            if(!(entity != oscar)) { _fun125879_ip = 1381; continue _fun125879 }
 31:
            mike = _closure1_slot4;
            offset = mike.GUILD_CATEGORY;
            mike = options.type;
            if(!(mike !== offset)) { _fun125879_ip = 1165; continue _fun125879 }
 56:
            yankee = _closure1_slot5;
            golf = options.type;
            mike = oscar.type;
            verify = undefined;
            mike = yankee.bind(verify)(golf, mike);
            if(mike) { _fun125879_ip = 1151; continue _fun125879 }
 84:
            if(!(!(zulu < report))) { _fun125879_ip = 657; continue _fun125879 }
 91:
            mike = oscar.type;
            if(!(mike !== offset)) { _fun125879_ip = 382; continue _fun125879 }
 103:
            golf = _closure1_slot7;
            mike = true;
            mike = golf.bind(verify)(oscar, backup, mike);
            yankee = entity != mike;
            golf = 0;
            if(!yankee) { _fun125879_ip = 128; continue _fun125879 }
 125:
            golf = mike;
 128:
            mike = 1;
            mike = golf + mike;
            romeo = backup[mike];
            foxtrot = _closure1_slot6;
            echo = oscar.id;
            result = options.type;
            update = -1;
            source = undefined;
            output = backup;
            yankee = source[foxtrot](update, echo, result, output, sizing);
            golf = entity == yankee;
            mike = null;
            if(golf) { _fun125879_ip = 377; continue _fun125879 }
 180:
            golf = options.isGuildVocal;
            golf = golf.bind(options)();
            if(!golf) { _fun125879_ip = 239; continue _fun125879 }
 193:
            if(!(entity != romeo)) { _fun125879_ip = 346; continue _fun125879 }
 200:
            foxtrot = romeo.channel;
            golf = foxtrot.isCategory;
            golf = golf.bind(foxtrot)();
            if(golf) { _fun125879_ip = 346; continue _fun125879 }
 221:
            foxtrot = romeo.channel;
            golf = foxtrot.isGuildVocal;
            golf = golf.bind(foxtrot)();
            if(golf) { _fun125879_ip = 308; continue _fun125879 }
 239:
            golf = options.isCategory;
            foxtrot = golf.bind(options)();
            golf = null;
            if(!foxtrot) { _fun125879_ip = 303; continue _fun125879 }
 254:
            if(!(entity != romeo)) { _fun125879_ip = 278; continue _fun125879 }
 258:
            kilo = romeo.channel;
            foxtrot = kilo.isCategory;
            foxtrot = foxtrot.bind(kilo)();
            golf = null;
            if(!foxtrot) { _fun125879_ip = 303; continue _fun125879 }
 278:
            foxtrot = {};
            kilo = yankee.channel;
            kilo = kilo.id;
            foxtrot['referenceId'] = kilo;
            foxtrot['parentId'] = entity;
            golf = foxtrot;
 303:
            mike = golf;
            _fun125879_ip = 377; continue _fun125879;
 308:
            golf = {};
            foxtrot = yankee.channel;
            foxtrot = foxtrot.id;
            golf['referenceId'] = foxtrot;
            romeo = romeo.channel;
            romeo = romeo.parent_id;
            golf['parentId'] = romeo;
            mike = golf;
            _fun125879_ip = 377; continue _fun125879;
 346:
            golf = {};
            yankee = yankee.channel;
            yankee = yankee.id;
            golf['referenceId'] = yankee;
            yankee = oscar.parent_id;
            golf['parentId'] = yankee;
            mike = golf;
 377:
            _fun125879_ip = 652; continue _fun125879;
 382:
            yankee = _closure1_slot7;
            golf = true;
            golf = yankee.bind(verify)(oscar, backup, golf);
            romeo = entity != golf;
            yankee = 0;
            if(!romeo) { _fun125879_ip = 407; continue _fun125879 }
 404:
            yankee = golf;
 407:
            golf = 1;
            golf = yankee + golf;
            foxtrot = backup[golf];
            kilo = _closure1_slot6;
            echo = oscar.id;
            result = options.type;
            update = -1;
            source = undefined;
            output = backup;
            romeo = source[kilo](update, echo, result, output, sizing);
            yankee = entity != romeo;
            golf = null;
            if(!yankee) { _fun125879_ip = 649; continue _fun125879 }
 459:
            if(!(entity != foxtrot)) { _fun125879_ip = 619; continue _fun125879 }
 466:
            sizing = _closure1_slot5;
            yankee = foxtrot.channel;
            kilo = yankee.type;
            yankee = options.type;
            yankee = sizing.bind(verify)(kilo, yankee);
            if(yankee) { _fun125879_ip = 581; continue _fun125879 }
 494:
            kilo = _closure1_slot2;
            yankee = options.type;
            yankee = kilo.bind(verify)(yankee);
            if(!yankee) { _fun125879_ip = 529; continue _fun125879 }
 511:
            kilo = foxtrot.channel;
            yankee = kilo.isGuildVocal;
            yankee = yankee.bind(kilo)();
            if(yankee) { _fun125879_ip = 581; continue _fun125879 }
 529:
            kilo = foxtrot.channel;
            yankee = kilo.isCategory;
            yankee = yankee.bind(kilo)();
            golf = null;
            if(!yankee) { _fun125879_ip = 649; continue _fun125879 }
 549:
            yankee = {};
            kilo = romeo.channel;
            kilo = kilo.id;
            yankee['referenceId'] = kilo;
            kilo = oscar.id;
            yankee['parentId'] = kilo;
            golf = yankee;
            _fun125879_ip = 649; continue _fun125879;
 581:
            yankee = {};
            kilo = romeo.channel;
            kilo = kilo.id;
            yankee['referenceId'] = kilo;
            foxtrot = foxtrot.channel;
            foxtrot = foxtrot.parent_id;
            yankee['parentId'] = foxtrot;
            golf = yankee;
            _fun125879_ip = 649; continue _fun125879;
 619:
            yankee = {};
            romeo = romeo.channel;
            romeo = romeo.id;
            yankee['referenceId'] = romeo;
            romeo = oscar.id;
            yankee['parentId'] = romeo;
            golf = yankee;
 649:
            mike = golf;
 652:
            _fun125879_ip = 1149; continue _fun125879;
 657:
            golf = oscar.type;
            if(!(golf !== offset)) { _fun125879_ip = 890; continue _fun125879 }
 669:
            offset = _closure1_slot7;
            golf = true;
            offset = offset.bind(verify)(oscar, backup, golf);
            yankee = entity != offset;
            golf = 0;
            if(!yankee) { _fun125879_ip = 694; continue _fun125879 }
 691:
            golf = offset;
 694:
            foxtrot = 1;
            golf = golf - foxtrot;
            yankee = backup[golf];
            romeo = _closure1_slot6;
            echo = oscar.id;
            result = options.type;
            source = undefined;
            update = foxtrot;
            output = backup;
            romeo = source[romeo](update, echo, result, output, sizing);
            if(!(entity == yankee)) { _fun125879_ip = 781; continue _fun125879 }
 735:
            golf = options.isGuildVocal;
            golf = golf.bind(options)();
            if(golf) { _fun125879_ip = 781; continue _fun125879 }
 748:
            golf = {};
            foxtrot = entity != romeo;
            offset = null;
            if(!foxtrot) { _fun125879_ip = 769; continue _fun125879 }
 759:
            foxtrot = romeo.channel;
            offset = foxtrot.id;
 769:
            golf['referenceId'] = offset;
            golf['parentId'] = entity;
            _fun125879_ip = 885; continue _fun125879;
 781:
            foxtrot = _closure1_slot2;
            offset = options.type;
            foxtrot = foxtrot.bind(verify)(offset);
            offset = null;
            if(!foxtrot) { _fun125879_ip = 882; continue _fun125879 }
 800:
            foxtrot = entity != romeo;
            offset = null;
            if(!foxtrot) { _fun125879_ip = 882; continue _fun125879 }
 809:
            kilo = _closure1_slot2;
            foxtrot = yankee.channel;
            foxtrot = foxtrot.type;
            foxtrot = kilo.bind(verify)(foxtrot);
            if(foxtrot) { _fun125879_ip = 851; continue _fun125879 }
 831:
            foxtrot = yankee.channel;
            yankee = foxtrot.isCategory;
            yankee = yankee.bind(foxtrot)();
            offset = null;
            if(!yankee) { _fun125879_ip = 882; continue _fun125879 }
 851:
            yankee = {};
            romeo = romeo.channel;
            romeo = romeo.id;
            yankee['referenceId'] = romeo;
            romeo = oscar.parent_id;
            yankee['parentId'] = romeo;
            offset = yankee;
 882:
            golf = offset;
 885:
            _fun125879_ip = 1146; continue _fun125879;
 890:
            yankee = _closure1_slot7;
            offset = true;
            yankee = yankee.bind(verify)(oscar, backup, offset);
            romeo = entity != yankee;
            offset = 0;
            if(!romeo) { _fun125879_ip = 915; continue _fun125879 }
 912:
            offset = yankee;
 915:
            kilo = 1;
            offset = offset - kilo;
            romeo = backup[offset];
            foxtrot = _closure1_slot6;
            echo = oscar.id;
            result = options.type;
            source = undefined;
            update = kilo;
            output = backup;
            foxtrot = source[foxtrot](update, echo, result, output, sizing);
            if(!(entity != romeo)) { _fun125879_ip = 1129; continue _fun125879 }
 959:
            yankee = entity != foxtrot;
            offset = null;
            if(!yankee) { _fun125879_ip = 1143; continue _fun125879 }
 971:
            sizing = _closure1_slot5;
            yankee = romeo.channel;
            kilo = yankee.type;
            yankee = options.type;
            yankee = sizing.bind(verify)(kilo, yankee);
            if(yankee) { _fun125879_ip = 1091; continue _fun125879 }
 999:
            yankee = options.isGuildVocal;
            yankee = yankee.bind(options)();
            if(!yankee) { _fun125879_ip = 1034; continue _fun125879 }
 1012:
            kilo = _closure1_slot2;
            yankee = romeo.channel;
            yankee = yankee.type;
            yankee = kilo.bind(verify)(yankee);
            if(yankee) { _fun125879_ip = 1091; continue _fun125879 }
 1034:
            kilo = romeo.channel;
            yankee = kilo.isCategory;
            yankee = yankee.bind(kilo)();
            offset = null;
            if(!yankee) { _fun125879_ip = 1143; continue _fun125879 }
 1054:
            yankee = {};
            kilo = foxtrot.channel;
            kilo = kilo.id;
            yankee['referenceId'] = kilo;
            kilo = romeo.channel;
            kilo = kilo.id;
            yankee['parentId'] = kilo;
            offset = yankee;
            _fun125879_ip = 1143; continue _fun125879;
 1091:
            yankee = {};
            foxtrot = foxtrot.channel;
            foxtrot = foxtrot.id;
            yankee['referenceId'] = foxtrot;
            romeo = romeo.channel;
            romeo = romeo.parent_id;
            yankee['parentId'] = romeo;
            offset = yankee;
            _fun125879_ip = 1143; continue _fun125879;
 1129:
            offset = {'referenceId': null, 'parentId': null};
 1143:
            golf = offset;
 1146:
            mike = golf;
 1149:
            _fun125879_ip = 1160; continue _fun125879;
 1151:
            golf = _closure1_slot8;
            mike = golf.bind(verify)(oscar);
 1160:
            _fun125879_ip = 1379; continue _fun125879;
 1165:
            if(!(zulu !== report)) { _fun125879_ip = 1365; continue _fun125879 }
 1172:
            if(!(zulu < report)) { _fun125879_ip = 1193; continue _fun125879 }
 1176:
            verify = options.type;
            golf = oscar.type;
            if(!(verify !== golf)) { _fun125879_ip = 1365; continue _fun125879 }
 1193:
            report = zulu > report;
            zulu = null;
            if(!report) { _fun125879_ip = 1363; continue _fun125879 }
 1205:
            report = _closure1_slot4;
            offset = report.GUILD_CATEGORY;
            golf = _closure1_slot7;
            foxtrot = undefined;
            report = true;
            report = golf.bind(foxtrot)(oscar, backup, report);
            verify = entity != report;
            golf = 0;
            if(!verify) { _fun125879_ip = 1242; continue _fun125879 }
 1239:
            golf = report;
 1242:
            report = 1;
            report = golf + report;
            golf = backup[report];
            romeo = _closure1_slot6;
            echo = oscar.id;
            result = options.type;
            update = -1;
            source = undefined;
            output = backup;
            verify = source[romeo](update, echo, result, output, sizing);
            yankee = entity == verify;
            report = null;
            if(yankee) { _fun125879_ip = 1360; continue _fun125879 }
 1291:
            yankee = verify.channel;
            yankee = yankee.id;
            options = options.id;
            report = null;
            if(!(yankee !== options)) { _fun125879_ip = 1360; continue _fun125879 }
 1312:
            if(!(entity != golf)) { _fun125879_ip = 1332; continue _fun125879 }
 1316:
            golf = golf.channel;
            options = golf.type;
            golf = null;
            if(!(options === offset)) { _fun125879_ip = 1357; continue _fun125879 }
 1332:
            options = {};
            verify = verify.channel;
            verify = verify.id;
            options['referenceId'] = verify;
            options['parentId'] = entity;
            golf = options;
 1357:
            report = golf;
 1360:
            zulu = report;
 1363:
            _fun125879_ip = 1376; continue _fun125879;
 1365:
            report = _closure1_slot8;
            tango = undefined;
            zulu = report.bind(tango)(oscar);
 1376:
            mike = zulu;
 1379:
            return mike;
 1381:
            return entity;
        }
    };
    zulu['getDropData'] = tango;
    mike = function(argFoo, argBar, argBaz, argCorge) { // Original name: getDnDUpdates
        _fun125880: for(var _fun125880_ip = 0; ; ) switch(_fun125880_ip) {
 0:
            oscar = argFoo;
            options = argBar;
            report = argBaz;
            yankee = argCorge;
            var _closure2_slot0 = oscar;
            var _closure2_slot1 = report;
            mike = new Array(0);
            var _closure2_slot4 = mike;
            mike = new Array(0);
            verify = yankee._categories;
            tango = function(argFoo) { // Original name: generateUpdates
                _fun125881: for(var _fun125881_ip = 0; ; ) switch(_fun125881_ip) {
 0:
                    verify = argFoo;
                    entity = _closure2_slot2;
                    tango = null;
                    if(!(tango != entity)) { _fun125881_ip = 90; continue _fun125881 }
 18:
                    entity = _closure2_slot3;
                    if(!(tango != entity)) { _fun125881_ip = 90; continue _fun125881 }
 26:
                    oscar = _closure2_slot0;
                    report = _closure2_slot2;
                    mike = _closure2_slot3;
                    entity = tango != report;
                    if(!entity) { _fun125881_ip = 49; continue _fun125881 }
 45:
                    entity = tango != mike;
 49:
                    if(!entity) { _fun125881_ip = 60; continue _fun125881 }
 52:
                    golf = verify[report];
                    entity = tango != golf;
 60:
                    if(!entity) { _fun125881_ip = 76; continue _fun125881 }
 63:
                    report = verify[report];
                    report = report.channel;
                    entity = report === oscar;
 76:
                    if(!entity) { _fun125881_ip = 87; continue _fun125881 }
 79:
                    mike = verify[mike];
                    entity = tango != mike;
 87:
                    if(entity) { _fun125881_ip = 108; continue _fun125881 }
 90:
                    entity = new Array(0);
                    offset = 0;
                    romeo = entity;
                    yankee = verify;
                    mike = arraySpread(romeo, yankee, offset);
                    _fun125881_ip = 154; continue _fun125881;
 108:
                    report = _closure1_slot0;
                    tango = _closure1_slot1;
                    mike = 2;
                    tango = tango[mike];
                    mike = undefined;
                    oscar = report.bind(mike)(tango);
                    report = oscar.moveItemFromTo;
                    tango = _closure2_slot2;
                    mike = _closure2_slot3;
                    entity = report.bind(oscar)(verify, tango, mike);
 154:
                    report = _closure2_slot4;
                    tango = report.concat;
                    golf = _closure1_slot0;
                    oscar = _closure1_slot1;
                    mike = 2;
                    oscar = oscar[mike];
                    mike = undefined;
                    golf = golf.bind(mike)(oscar);
                    oscar = golf.calculatePositionDeltas;
                    mike = {};
                    mike['oldOrdering'] = verify;
                    mike['newOrdering'] = entity;
                    verify = function(argFoo) { // Original name: idGetter
                        entity = argFoo;
                        entity = entity.channel;
                        entity = entity.id;
                        return entity;
                    };
                    mike['idGetter'] = verify;
                    options = function(argFoo) { // Original name: existingPositionGetter
                        entity = argFoo;
                        entity = entity.channel;
                        entity = entity.position;
                        return entity;
                    };
                    mike['existingPositionGetter'] = options;
                    mike = oscar.bind(golf)(mike);
                    mike = tango.bind(report)(mike);
                    _closure2_slot4 = mike;
                    return entity;
                }
            };
            zulu = oscar.isCategory;
            zulu = zulu.bind(oscar)();
            if(!zulu) { _fun125880_ip = 143; continue _fun125880 }
 60:
            romeo = new Array(0);
            golf = 0;
            output = romeo;
            sizing = verify;
            kilo = 0;
            zulu = arraySpread(output, sizing, kilo);
            offset = romeo.slice;
            zulu = 1;
            offset = offset.bind(romeo)(zulu);
            romeo = _closure1_slot7;
            zulu = undefined;
            foxtrot = romeo.bind(zulu)(oscar, offset);
            var _closure2_slot2 = foxtrot;
            romeo = romeo.bind(zulu)(options, offset);
            var _closure2_slot3 = romeo;
            zulu = tango.bind(zulu)(offset);
            offset = zulu.unshift;
            golf = verify[golf];
            golf = offset.bind(zulu)(golf);
            mike = zulu;
 143:
            romeo = _closure1_slot2;
            offset = oscar.type;
            zulu = undefined;
            offset = romeo.bind(zulu)(offset);
            if(offset) { _fun125880_ip = 178; continue _fun125880 }
 165:
            offset = oscar.isCategory;
            offset = offset.bind(oscar)();
            if(!offset) { _fun125880_ip = 258; continue _fun125880 }
 178:
            romeo = _closure1_slot0;
            foxtrot = _closure1_slot1;
            offset = 3;
            offset = foxtrot[offset];
            foxtrot = romeo.bind(zulu)(offset);
            backup = mike.length;
            offset = 0;
            romeo = verify;
            if(!(backup > offset)) { _fun125880_ip = 215; continue _fun125880 }
 212:
            romeo = mike;
 215:
            offset = function(argFoo) {
                entity = argFoo;
                entity = entity.channel;
                zulu = entity.type;
                mike = _closure1_slot2;
                entity = undefined;
                entity = mike.bind(entity)(zulu);
                return entity;
            };
            offset = foxtrot.bind(zulu)(romeo, yankee, offset);
            romeo = _closure1_slot7;
            foxtrot = romeo.bind(zulu)(oscar, offset);
            _closure2_slot2 = foxtrot;
            romeo = romeo.bind(zulu)(options, offset);
            _closure2_slot3 = romeo;
            offset = tango.bind(zulu)(offset);
 258:
            offset = oscar.isGuildVocal;
            offset = offset.bind(oscar)();
            if(offset) { _fun125880_ip = 284; continue _fun125880 }
 271:
            offset = oscar.isCategory;
            offset = offset.bind(oscar)();
            if(!offset) { _fun125880_ip = 361; continue _fun125880 }
 284:
            romeo = _closure1_slot0;
            foxtrot = _closure1_slot1;
            offset = 3;
            offset = foxtrot[offset];
            offset = romeo.bind(zulu)(offset);
            foxtrot = mike.length;
            romeo = 0;
            if(!(foxtrot > romeo)) { _fun125880_ip = 318; continue _fun125880 }
 315:
            verify = mike;
 318:
            mike = function(argFoo) {
                entity = argFoo;
                mike = entity.channel;
                entity = mike.isGuildVocal;
                entity = entity.bind(mike)();
                return entity;
            };
            mike = offset.bind(zulu)(verify, yankee, mike);
            golf = _closure1_slot7;
            verify = golf.bind(zulu)(oscar, mike);
            _closure2_slot2 = verify;
            golf = golf.bind(zulu)(options, mike);
            _closure2_slot3 = golf;
            mike = tango.bind(zulu)(mike);
 361:
            mike = oscar.parent_id;
            if(!(mike !== report)) { _fun125880_ip = 435; continue _fun125880 }
 371:
            mike = false;
            var _closure2_slot5 = mike;
            tango = _closure2_slot4;
            zulu = tango.find;
            mike = function(argFoo) {
                _fun125886: for(var _fun125886_ip = 0; ; ) switch(_fun125886_ip) {
 0:
                    tango = argFoo;
                    mike = tango.id;
                    entity = _closure2_slot0;
                    entity = entity.id;
                    entity = mike === entity;
                    if(!entity) { _fun125886_ip = 45; continue _fun125886 }
 27:
                    mike = _closure2_slot1;
                    tango['parent_id'] = mike;
                    mike = true;
                    _closure2_slot5 = mike;
                    entity = true;
 45:
                    return entity;
                }
            };
            mike = zulu.bind(tango)(mike);
            mike = _closure2_slot5;
            if(mike) { _fun125880_ip = 435; continue _fun125880 }
 405:
            tango = _closure2_slot4;
            zulu = tango.push;
            mike = {};
            oscar = oscar.id;
            mike['id'] = oscar;
            mike['parent_id'] = report;
            mike = zulu.bind(tango)(mike);
 435:
            entity = _closure2_slot4;
            return entity;
        }
    };
    zulu['getDnDUpdates'] = mike;
    return entity;
})();