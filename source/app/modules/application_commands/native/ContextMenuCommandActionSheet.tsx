// app/modules/application_commands/native/ContextMenuCommandActionSheet.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    option = argCor;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = option;
    var _closure1_slot3 = oscard;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = option.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.CONTEXT_MENU_COMMANDS_QUERY_LIMIT;
    var _closure1_slot6 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot7 = tangon;
    tangon = 11;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/application_commands/native/ContextMenuCommandActionSheet.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: ContextMenuCommandActionSheet
        entity = argFoo;
        output = entity.channel;
        var _closure2_slot0 = output;
        foxtra = entity.commandType;
        sizing = entity.commandTargetId;
        var _closure2_slot1 = sizing;
        romeon = entity.onBack;
        kiloes = entity.onPressAppCommand;
        var _closure2_slot2 = kiloes;
        oscard = _closure1_slot0;
        offset = _closure1_slot3;
        zuuluu = 4;
        zuuluu = offset[zuuluu];
        tangon = undefined;
        option = oscard.bind(tangon)(zuuluu);
        golfie = option.useStateFromStores;
        zuuluu = _closure1_slot5;
        report = new Array(1);
        report[0] = zuuluu;
        zuuluu = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                zuuluu = _closure1_slot5;
                michal = zuuluu.getGuild;
                report = _closure2_slot0;
                entity = null;
                report = entity == report;
                entity = undefined;
                if(report) { _fun00002_ip = 44; continue _fun00001 }
 30:
                report = _closure2_slot0;
                tangon = report.getGuildId;
                entity = tangon.bind(report)();
 44:
                entity = michal.bind(zuuluu)(entity);
                return entity;
            }
        };
        report = golfie.bind(option)(report, zuuluu);
        var _closure2_slot3 = report;
        golfie = _closure1_slot2;
        zuuluu = 5;
        zuuluu = offset[zuuluu];
        option = golfie.bind(tangon)(zuuluu);
        golfie = option.useDiscovery;
        zuuluu = {};
        verify = {};
        verify['channel'] = output;
        yankee = 'channel';
        verify['type'] = yankee;
        zuuluu['context'] = verify;
        verify = {};
        yankee = new Array(1);
        yankee[0] = foxtra;
        verify['commandTypes'] = yankee;
        zuuluu['filters'] = verify;
        verify = {};
        yankee = _closure1_slot6;
        verify['limit'] = yankee;
        zuuluu['options'] = verify;
        yankee = true;
        zuuluu['allowFetch'] = yankee;
        golfie = golfie.bind(option)(zuuluu);
        foxtra = golfie.commands;
        var _closure2_slot4 = foxtra;
        zuuluu = golfie.sectionDescriptors;
        var _closure2_slot5 = zuuluu;
        backup = golfie.loading;
        var _closure2_slot6 = backup;
        verify = _closure1_slot4;
        option = verify.useMemo;
        golfie = new Array(1);
        golfie[0] = zuuluu;
        zuuluu = function() {
            michal = {};
            var _closure3_slot0 = michal;
            tangon = _closure2_slot5;
            zuuluu = tangon.forEach;
            entity = function(argFoo) {
                zuuluu = argFoo;
                michal = _closure3_slot0;
                entity = zuuluu.id;
                michal[entity] = zuuluu;
                entity = undefined;
                return entity;
            };
            entity = zuuluu.bind(tangon)(entity);
            entity = {};
            entity['sections'] = michal;
            return entity;
        };
        zuuluu = option.bind(verify)(zuuluu, golfie);
        zuuluu = zuuluu.sections;
        var _closure2_slot7 = zuuluu;
        option = verify.useCallback;
        golfie = new Array(3);
        golfie[0] = output;
        golfie[1] = sizing;
        golfie[2] = report;
        report = function(argFoo) {
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                oscard = argFoo;
                michal = oscard.type;
                entity = 'command';
                if(!(entity === michal)) { _fun00004_ip = 122; continue _fun00003 }
 16:
                zuuluu = _closure1_slot1;
                tangon = _closure1_slot3;
                entity = 6;
                entity = tangon[entity];
                michal = undefined;
                report = zuuluu.bind(michal)(entity);
                entity = {};
                oscard = oscard.command;
                entity['command'] = oscard;
                oscard = {};
                entity['optionValues'] = oscard;
                golfie = {};
                option = _closure2_slot0;
                golfie['channel'] = option;
                option = _closure2_slot3;
                golfie['guild'] = option;
                entity['context'] = golfie;
                oscard = _closure2_slot1;
                entity['commandTargetId'] = oscard;
                entity = report.bind(michal)(entity);
                entity = 7;
                entity = tangon[entity];
                michal = zuuluu.bind(michal)(entity);
                entity = michal.hideActionSheet;
                entity = entity.bind(michal)();
 122:
                entity = undefined;
                return entity;
            }
        };
        sizing = option.bind(verify)(report, golfie);
        var _closure2_slot8 = sizing;
        option = verify.useCallback;
        golfie = function(argFoo) {
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                michal = argFoo;
                zuuluu = michal.type;
                entity = 'command';
                if(!(entity !== zuuluu)) { _fun00006_ip = 23; continue _fun00005 }
 16:
                entity = michal.type;
                _fun00006_ip = 34; continue _fun00005;
 23:
                michal = michal.command;
                entity = michal.id;
 34:
                return entity;
            }
        };
        report = new Array(0);
        option = option.bind(verify)(golfie, report);
        golfie = verify.useCallback;
        report = new Array(3);
        report[0] = sizing;
        report[1] = kiloes;
        report[2] = zuuluu;
        zuuluu = function(argFoo) {
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                entity = argFoo;
                report = entity.item;
                var _closure3_slot0 = report;
                michal = report.type;
                entity = 'placeholder';
                if(!(entity !== michal)) { _fun00008_ip = 183; continue _fun00007 }
 30:
                entity = 'no_commands';
                if(!(entity !== michal)) { _fun00008_ip = 138; continue _fun00007 }
 40:
                entity = 'command';
                if(!(entity !== michal)) { _fun00008_ip = 52; continue _fun00007 }
 48:
                entity = undefined;
                return entity;
 52:
                tangon = _closure1_slot7;
                michal = _closure1_slot1;
                zuuluu = _closure1_slot3;
                entity = 8;
                entity = zuuluu[entity];
                zuuluu = undefined;
                michal = michal.bind(zuuluu)(entity);
                entity = {};
                golfie = report.command;
                entity['item'] = golfie;
                oscard = function() { // Original name: onPress
                    _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                        zuuluu = _closure2_slot2;
                        michal = null;
                        if(!(michal != zuuluu)) { _fun00010_ip = 23; continue _fun00009 }
 13:
                        zuuluu = _closure2_slot2;
                        michal = undefined;
                        michal = zuuluu.bind(michal)();
 23:
                        zuuluu = _closure2_slot8;
                        michal = _closure3_slot0;
                        entity = undefined;
                        michal = zuuluu.bind(entity)(michal);
                        return entity;
                    }
                };
                entity['onPress'] = oscard;
                oscard = _closure2_slot7;
                report = report.command;
                report = report.applicationId;
                report = oscard[report];
                entity['section'] = report;
                entity = tangon.bind(zuuluu)(michal, entity);
                return entity;
 138:
                tangon = _closure1_slot7;
                michal = _closure1_slot0;
                zuuluu = _closure1_slot3;
                entity = 8;
                entity = zuuluu[entity];
                zuuluu = undefined;
                entity = michal.bind(zuuluu)(entity);
                michal = entity.ContextMenuCommandEmptyItem;
                entity = {};
                entity = tangon.bind(zuuluu)(michal, entity);
                return entity;
 183:
                tangon = _closure1_slot7;
                michal = _closure1_slot0;
                zuuluu = _closure1_slot3;
                entity = 8;
                entity = zuuluu[entity];
                zuuluu = undefined;
                entity = michal.bind(zuuluu)(entity);
                michal = entity.ContextMenuCommandLoadingItem;
                entity = {};
                entity = tangon.bind(zuuluu)(michal, entity);
                return entity;
            }
        };
        golfie = golfie.bind(verify)(zuuluu, report);
        report = verify.useMemo;
        zuuluu = new Array(2);
        zuuluu[0] = backup;
        zuuluu[1] = foxtra;
        michal = function() {
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                michal = _closure2_slot6;
                if(michal) { _fun00012_ip = 75; continue _fun00011 }
 10:
                michal = _closure2_slot4;
                zuuluu = michal.length;
                michal = 0;
                if(!(michal !== zuuluu)) { _fun00012_ip = 50; continue _fun00011 }
 25:
                zuuluu = _closure2_slot4;
                michal = zuuluu.map;
                entity = function(argFoo) {
                    entity = {};
                    michal = 'command';
                    entity['type'] = michal;
                    michal = argFoo;
                    entity['command'] = michal;
                    return entity;
                };
                entity = michal.bind(zuuluu)(entity);
                _fun00012_ip = 73; continue _fun00011;
 50:
                zuuluu = {};
                michal = 'no_commands';
                zuuluu['type'] = michal;
                michal = new Array(1);
                michal[0] = zuuluu;
                entity = michal;
 73:
                _fun00012_ip = 96; continue _fun00011;
 75:
                zuuluu = {};
                michal = 'placeholder';
                zuuluu['type'] = michal;
                michal = new Array(1);
                michal[0] = zuuluu;
                entity = michal;
 96:
                return entity;
            }
        };
        verify = report.bind(verify)(michal, zuuluu);
        zuuluu = _closure1_slot7;
        michal = _closure1_slot1;
        report = 9;
        entity = offset[report];
        michal = michal.bind(tangon)(entity);
        entity = {};
        foxtra = 10;
        backup = offset[foxtra];
        backup = oscard.bind(tangon)(backup);
        kiloes = backup.intl;
        backup = kiloes.string;
        foxtra = offset[foxtra];
        foxtra = oscard.bind(tangon)(foxtra);
        foxtra = foxtra.t;
        foxtra = foxtra.PHjkRE;
        foxtra = backup.bind(kiloes)(foxtra);
        entity['title'] = foxtra;
        entity['onBack'] = romeon;
        entity['scrollable'] = yankee;
        report = offset[report];
        report = oscard.bind(tangon)(report);
        oscard = report.UserProfileStackedActionSheetList;
        report = {};
        report['data'] = verify;
        report['keyExtractor'] = option;
        report['renderItem'] = golfie;
        report = zuuluu.bind(tangon)(oscard, report);
        entity['children'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    zuuluu['default'] = michal;
    return entity;
})();