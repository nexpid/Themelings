// app/modules/guild_onboarding/usePromptHelpText.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = function(argFoo, argBar, argBaz) { // Original name: formatRoleString
        _fun62336: for(var _fun62336_ip = 0; ; ) switch(_fun62336_ip) {
 0:
            golf = argFoo;
            mike = golf.length;
            entity = '';
            oscar = 0;
            if(!(oscar !== mike)) { _fun62336_ip = 180; continue _fun62336 }
 21:
            tango = _closure1_slot0;
            zulu = _closure1_slot1;
            verify = 4;
            zulu = zulu[verify];
            options = undefined;
            zulu = tango.bind(options)(zulu);
            report = zulu.intl;
            tango = report.format;
            zulu = _closure1_slot0;
            mike = _closure1_slot1;
            mike = mike[verify];
            mike = zulu.bind(options)(mike);
            mike = mike.t;
            zulu = argBaz;
            if(zulu) { _fun62336_ip = 92; continue _fun62336 }
 84:
            zulu = mike.Kj5GIS;
            _fun62336_ip = 98; continue _fun62336;
 92:
            zulu = mike.cJZxWV;
 98:
            mike = {};
            options = golf.length;
            mike['count'] = options;
            options = global;
            offset = options.Math;
            verify = offset.max;
            yankee = golf.length;
            options = 2;
            options = yankee - options;
            options = verify.bind(offset)(options, oscar);
            mike['extraCount'] = options;
            oscar = golf[oscar];
            mike['role1'] = oscar;
            oscar = 1;
            oscar = golf[oscar];
            mike['role2'] = oscar;
            oscar = argBar;
            mike['itemHook'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 180:
            return entity;
        }
    };
    var _closure1_slot6 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    var _closure1_slot2 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 8;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/guild_onboarding/usePromptHelpText.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo) { // Original name: usePromptHelpText
        _fun62337: for(var _fun62337_ip = 0; ; ) switch(_fun62337_ip) {
 0:
            entity = argFoo;
            mike = entity.guild;
            var _closure2_slot0 = mike;
            mike = entity.prompt;
            options = entity.selectedRoleIds;
            tango = entity.selectedChannelIds;
            var _closure2_slot1 = tango;
            oscar = entity.itemHook;
            verify = _closure1_slot0;
            offset = _closure1_slot1;
            tango = 5;
            golf = offset[tango];
            report = undefined;
            foxtrot = verify.bind(report)(golf);
            romeo = foxtrot.useStateFromStores;
            golf = _closure1_slot3;
            yankee = new Array(1);
            yankee[0] = golf;
            golf = function() {
                _fun62338: for(var _fun62338_ip = 0; ; ) switch(_fun62338_ip) {
 0:
                    zulu = _closure2_slot0;
                    entity = null;
                    zulu = entity != zulu;
                    entity = undefined;
                    if(!zulu) { _fun62338_ip = 45; continue _fun62338 }
 18:
                    tango = _closure1_slot3;
                    zulu = tango.getRoles;
                    mike = _closure2_slot0;
                    mike = mike.id;
                    entity = zulu.bind(tango)(mike);
 45:
                    return entity;
                }
            };
            golf = romeo.bind(foxtrot)(yankee, golf);
            var _closure2_slot2 = golf;
            tango = offset[tango];
            romeo = verify.bind(report)(tango);
            yankee = romeo.useStateFromStoresArray;
            tango = _closure1_slot2;
            golf = new Array(3);
            golf[0] = tango;
            tango = _closure1_slot5;
            golf[1] = tango;
            tango = _closure1_slot4;
            golf[2] = tango;
            tango = function() {
                mike = global;
                tango = mike.Array;
                zulu = tango.from;
                mike = _closure2_slot1;
                tango = zulu.bind(tango)(mike);
                zulu = tango.map;
                mike = function(argFoo) {
                    zulu = _closure1_slot2;
                    mike = zulu.getChannel;
                    entity = argFoo;
                    entity = mike.bind(zulu)(entity);
                    return entity;
                };
                tango = zulu.bind(tango)(mike);
                zulu = tango.filter;
                oscar = _closure1_slot0;
                report = _closure1_slot1;
                mike = 6;
                report = report[mike];
                mike = undefined;
                mike = oscar.bind(mike)(report);
                mike = mike.isNotNullish;
                zulu = zulu.bind(tango)(mike);
                mike = zulu.map;
                entity = function(argFoo) {
                    tango = _closure1_slot0;
                    zulu = _closure1_slot1;
                    mike = 7;
                    zulu = zulu[mike];
                    mike = undefined;
                    oscar = tango.bind(mike)(zulu);
                    report = oscar.computeChannelName;
                    verify = _closure1_slot5;
                    options = _closure1_slot4;
                    offset = argFoo;
                    golf = true;
                    yankee = oscar;
                    entity = yankee[report](offset, verify, options, golf, oscar);
                    return entity;
                };
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            kilo = yankee.bind(romeo)(golf, tango);
            backup = global;
            golf = backup.Array;
            tango = golf.from;
            options = tango.bind(golf)(options);
            golf = options.map;
            tango = function(argFoo) {
                _fun62342: for(var _fun62342_ip = 0; ; ) switch(_fun62342_ip) {
 0:
                    zulu = _closure2_slot2;
                    entity = null;
                    if(!(entity == zulu)) { _fun62342_ip = 17; continue _fun62342 }
 13:
                    zulu = {};
                    _fun62342_ip = 21; continue _fun62342;
 17:
                    zulu = _closure2_slot2;
 21:
                    mike = argFoo;
                    mike = zulu[mike];
                    zulu = entity == mike;
                    entity = undefined;
                    if(zulu) { _fun62342_ip = 42; continue _fun62342 }
 37:
                    entity = mike.name;
 42:
                    return entity;
                }
            };
            options = golf.bind(options)(tango);
            golf = options.filter;
            tango = 6;
            tango = offset[tango];
            tango = verify.bind(report)(tango);
            tango = tango.isNotNullish;
            golf = golf.bind(options)(tango);
            tango = golf.map;
            zulu = function(argFoo) {
                entity = global;
                entity = entity.HermesInternal;
                zulu = entity.concat;
                mike = '@';
                entity = argFoo;
                entity = zulu.bind(mike)(entity);
                return entity;
            };
            tango = tango.bind(golf)(zulu);
            zulu = null;
            if(!(zulu != mike)) { _fun62337_ip = 248; continue _fun62337 }
 235:
            mike = mike.singleSelect;
            zulu = '';
            if(mike) { _fun62337_ip = 303; continue _fun62337 }
 248:
            verify = _closure1_slot0;
            offset = _closure1_slot1;
            mike = 4;
            golf = offset[mike];
            golf = verify.bind(report)(golf);
            options = golf.intl;
            golf = options.string;
            mike = offset[mike];
            mike = verify.bind(report)(mike);
            mike = mike.t;
            mike = mike.JshhEh;
            zulu = golf.bind(options)(mike);
 303:
            mike = kilo.length;
            offset = 0;
            if(!(offset === mike)) { _fun62337_ip = 326; continue _fun62337 }
 314:
            mike = tango.length;
            if(!(!(mike > offset))) { _fun62337_ip = 523; continue _fun62337 }
 326:
            mike = kilo.length;
            options = mike > offset;
            golf = '';
            mike = golf;
            if(!options) { _fun62337_ip = 537; continue _fun62337 }
 348:
            verify = kilo.length;
            options = golf;
            if(!(offset !== verify)) { _fun62337_ip = 490; continue _fun62337 }
 363:
            yankee = _closure1_slot0;
            sizing = _closure1_slot1;
            verify = 4;
            romeo = sizing[verify];
            romeo = yankee.bind(report)(romeo);
            foxtrot = romeo.intl;
            romeo = foxtrot.format;
            verify = sizing[verify];
            verify = yankee.bind(report)(verify);
            verify = verify.t;
            yankee = verify.Rj841d;
            verify = {};
            sizing = kilo.length;
            verify['count'] = sizing;
            output = backup.Math;
            sizing = output.max;
            result = kilo.length;
            backup = 2;
            backup = result - backup;
            backup = sizing.bind(output)(backup, offset);
            verify['extraCount'] = backup;
            backup = kilo[offset];
            verify['channel1'] = backup;
            backup = 1;
            backup = kilo[backup];
            verify['channel2'] = backup;
            verify['itemHook'] = oscar;
            options = romeo.bind(foxtrot)(yankee, verify);
 490:
            verify = tango.length;
            verify = verify > offset;
            if(!verify) { _fun62337_ip = 515; continue _fun62337 }
 502:
            offset = _closure1_slot6;
            verify = true;
            golf = offset.bind(report)(tango, oscar, verify);
 515:
            mike = golf;
            zulu = options;
            _fun62337_ip = 537; continue _fun62337;
 523:
            entity = _closure1_slot6;
            zulu = entity.bind(report)(tango, oscar);
            mike = '';
 537:
            entity = {};
            entity['helpText'] = zulu;
            entity['helpTextAdditional'] = mike;
            return entity;
        }
    };
    zulu['default'] = tango;
    mike = function(argFoo) { // Original name: useCustomizeCommunityPromptHelpText
        _fun62344: for(var _fun62344_ip = 0; ; ) switch(_fun62344_ip) {
 0:
            entity = argFoo;
            mike = entity.guild;
            var _closure2_slot0 = mike;
            mike = entity.prompt;
            golf = entity.selectedRoleIds;
            tango = entity.selectedChannelIds;
            var _closure2_slot1 = tango;
            oscar = entity.itemHook;
            options = _closure1_slot0;
            yankee = _closure1_slot1;
            tango = 5;
            report = yankee[tango];
            offset = undefined;
            foxtrot = options.bind(offset)(report);
            romeo = foxtrot.useStateFromStores;
            report = _closure1_slot3;
            verify = new Array(1);
            verify[0] = report;
            report = function() {
                _fun62345: for(var _fun62345_ip = 0; ; ) switch(_fun62345_ip) {
 0:
                    zulu = _closure2_slot0;
                    entity = null;
                    zulu = entity != zulu;
                    entity = undefined;
                    if(!zulu) { _fun62345_ip = 45; continue _fun62345 }
 18:
                    tango = _closure1_slot3;
                    zulu = tango.getRoles;
                    mike = _closure2_slot0;
                    mike = mike.id;
                    entity = zulu.bind(tango)(mike);
 45:
                    return entity;
                }
            };
            report = romeo.bind(foxtrot)(verify, report);
            var _closure2_slot2 = report;
            tango = yankee[tango];
            romeo = options.bind(offset)(tango);
            verify = romeo.useStateFromStoresArray;
            tango = _closure1_slot2;
            report = new Array(3);
            report[0] = tango;
            tango = _closure1_slot5;
            report[1] = tango;
            tango = _closure1_slot4;
            report[2] = tango;
            tango = function() {
                mike = global;
                tango = mike.Array;
                zulu = tango.from;
                mike = _closure2_slot1;
                tango = zulu.bind(tango)(mike);
                zulu = tango.map;
                mike = function(argFoo) {
                    zulu = _closure1_slot2;
                    mike = zulu.getChannel;
                    entity = argFoo;
                    entity = mike.bind(zulu)(entity);
                    return entity;
                };
                tango = zulu.bind(tango)(mike);
                zulu = tango.filter;
                oscar = _closure1_slot0;
                report = _closure1_slot1;
                mike = 6;
                report = report[mike];
                mike = undefined;
                mike = oscar.bind(mike)(report);
                mike = mike.isNotNullish;
                zulu = zulu.bind(tango)(mike);
                mike = zulu.map;
                entity = function(argFoo) {
                    tango = _closure1_slot0;
                    zulu = _closure1_slot1;
                    mike = 7;
                    zulu = zulu[mike];
                    mike = undefined;
                    oscar = tango.bind(mike)(zulu);
                    report = oscar.computeChannelName;
                    verify = _closure1_slot5;
                    options = _closure1_slot4;
                    offset = argFoo;
                    golf = true;
                    yankee = oscar;
                    entity = yankee[report](offset, verify, options, golf, oscar);
                    return entity;
                };
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            foxtrot = verify.bind(romeo)(report, tango);
            verify = global;
            report = verify.Array;
            tango = report.from;
            golf = tango.bind(report)(golf);
            report = golf.map;
            tango = function(argFoo) {
                _fun62349: for(var _fun62349_ip = 0; ; ) switch(_fun62349_ip) {
 0:
                    zulu = _closure2_slot2;
                    entity = null;
                    if(!(entity == zulu)) { _fun62349_ip = 17; continue _fun62349 }
 13:
                    zulu = {};
                    _fun62349_ip = 21; continue _fun62349;
 17:
                    zulu = _closure2_slot2;
 21:
                    mike = argFoo;
                    mike = zulu[mike];
                    zulu = entity == mike;
                    entity = undefined;
                    if(zulu) { _fun62349_ip = 42; continue _fun62349 }
 37:
                    entity = mike.name;
 42:
                    return entity;
                }
            };
            golf = report.bind(golf)(tango);
            report = golf.filter;
            tango = 6;
            tango = yankee[tango];
            tango = options.bind(offset)(tango);
            tango = tango.isNotNullish;
            report = report.bind(golf)(tango);
            tango = report.map;
            zulu = function(argFoo) {
                entity = global;
                entity = entity.HermesInternal;
                zulu = entity.concat;
                mike = '@';
                entity = argFoo;
                entity = zulu.bind(mike)(entity);
                return entity;
            };
            options = tango.bind(report)(zulu);
            zulu = null;
            if(!(zulu != mike)) { _fun62344_ip = 248; continue _fun62344 }
 235:
            zulu = mike.singleSelect;
            mike = '';
            if(zulu) { _fun62344_ip = 303; continue _fun62344 }
 248:
            golf = _closure1_slot0;
            yankee = _closure1_slot1;
            zulu = 4;
            tango = yankee[zulu];
            tango = golf.bind(offset)(tango);
            report = tango.intl;
            tango = report.string;
            zulu = yankee[zulu];
            zulu = golf.bind(offset)(zulu);
            zulu = zulu.t;
            zulu = zulu.JshhEh;
            mike = tango.bind(report)(zulu);
 303:
            zulu = foxtrot.length;
            golf = 0;
            if(!(golf === zulu)) { _fun62344_ip = 326; continue _fun62344 }
 314:
            zulu = options.length;
            if(!(!(zulu > golf))) { _fun62344_ip = 702; continue _fun62344 }
 326:
            zulu = foxtrot.length;
            if(!(zulu > golf)) { _fun62344_ip = 347; continue _fun62344 }
 335:
            zulu = options.length;
            if(!(golf !== zulu)) { _fun62344_ip = 570; continue _fun62344 }
 347:
            zulu = foxtrot.length;
            zulu = zulu > golf;
            if(!zulu) { _fun62344_ip = 368; continue _fun62344 }
 359:
            tango = options.length;
            zulu = tango > golf;
 368:
            if(!zulu) { _fun62344_ip = 829; continue _fun62344 }
 374:
            tango = _closure1_slot0;
            romeo = _closure1_slot1;
            zulu = 4;
            report = romeo[zulu];
            report = tango.bind(offset)(report);
            yankee = report.intl;
            report = yankee.format;
            zulu = romeo[zulu];
            zulu = tango.bind(offset)(zulu);
            zulu = zulu.t;
            tango = zulu.WewRHB;
            zulu = {};
            romeo = foxtrot.length;
            zulu['channelCount'] = romeo;
            kilo = verify.Math;
            backup = kilo.max;
            romeo = foxtrot.length;
            output = 2;
            romeo = romeo - output;
            romeo = backup.bind(kilo)(romeo, golf);
            zulu['extraChannelCount'] = romeo;
            romeo = foxtrot[golf];
            zulu['channel1'] = romeo;
            romeo = 1;
            backup = foxtrot[romeo];
            zulu['channel2'] = backup;
            zulu['itemHook'] = oscar;
            backup = options.length;
            zulu['roleCount'] = backup;
            sizing = verify.Math;
            kilo = sizing.max;
            backup = options.length;
            backup = backup - output;
            backup = kilo.bind(sizing)(backup, golf);
            zulu['extraRoleCount'] = backup;
            backup = options[golf];
            zulu['role1'] = backup;
            romeo = options[romeo];
            zulu['role2'] = romeo;
            mike = report.bind(yankee)(tango, zulu);
            _fun62344_ip = 829; continue _fun62344;
 570:
            tango = _closure1_slot0;
            romeo = _closure1_slot1;
            zulu = 4;
            report = romeo[zulu];
            report = tango.bind(offset)(report);
            yankee = report.intl;
            report = yankee.format;
            zulu = romeo[zulu];
            zulu = tango.bind(offset)(zulu);
            zulu = zulu.t;
            tango = zulu.ZKywGR;
            zulu = {};
            romeo = foxtrot.length;
            zulu['count'] = romeo;
            kilo = verify.Math;
            backup = kilo.max;
            sizing = foxtrot.length;
            romeo = 2;
            romeo = sizing - romeo;
            romeo = backup.bind(kilo)(romeo, golf);
            zulu['extraCount'] = romeo;
            romeo = foxtrot[golf];
            zulu['channel1'] = romeo;
            romeo = 1;
            romeo = foxtrot[romeo];
            zulu['channel2'] = romeo;
            zulu['itemHook'] = oscar;
            mike = report.bind(yankee)(tango, zulu);
            _fun62344_ip = 829; continue _fun62344;
 702:
            zulu = _closure1_slot0;
            yankee = _closure1_slot1;
            entity = 4;
            tango = yankee[entity];
            tango = zulu.bind(offset)(tango);
            report = tango.intl;
            tango = report.format;
            entity = yankee[entity];
            entity = zulu.bind(offset)(entity);
            entity = entity.t;
            zulu = entity.vdtNYW;
            entity = {};
            offset = options.length;
            entity['count'] = offset;
            yankee = verify.Math;
            offset = yankee.max;
            romeo = options.length;
            verify = 2;
            verify = romeo - verify;
            verify = offset.bind(yankee)(verify, golf);
            entity['extraCount'] = verify;
            golf = options[golf];
            entity['role1'] = golf;
            golf = 1;
            golf = options[golf];
            entity['role2'] = golf;
            entity['itemHook'] = oscar;
            mike = tango.bind(report)(zulu, entity);
 829:
            entity = {};
            entity['helpText'] = mike;
            mike = '';
            entity['helpTextAdditional'] = mike;
            return entity;
        }
    };
    zulu['useCustomizeCommunityPromptHelpText'] = mike;
    return entity;
})();