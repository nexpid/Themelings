// app/modules/user_settings/native/UserSettingsAccountBackupCodes.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    yankee = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = yankee;
    var _closure1_slot2 = oscar;
    entity = function(argFoo) { // Original name: CodeRow
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            mike = argFoo;
            oscar = mike.code;
            var _closure2_slot0 = oscar;
            options = mike.showCheckMark;
            tango = _closure1_slot3;
            zulu = tango.useCallback;
            mike = new Array(1);
            mike[0] = oscar;
            entity = function() {
                zulu = _closure1_slot0;
                tango = _closure1_slot2;
                entity = 6;
                mike = tango[entity];
                entity = undefined;
                oscar = zulu.bind(entity)(mike);
                report = oscar.copy;
                verify = _closure2_slot0;
                options = verify.replace;
                golf = /[^a-zA-Z0-9]/g;
                mike = '';
                mike = options.bind(verify)(golf, mike);
                mike = report.bind(oscar)(mike);
                mike = 7;
                mike = tango[mike];
                zulu = zulu.bind(entity)(mike);
                mike = zulu.presentCopiedToClipboard;
                mike = mike.bind(zulu)();
                return entity;
            };
            offset = zulu.bind(tango)(entity, mike);
            tango = _closure1_slot7;
            mike = _closure1_slot0;
            entity = _closure1_slot2;
            verify = 8;
            entity = entity[verify];
            zulu = undefined;
            entity = mike.bind(zulu)(entity);
            mike = entity.FormRow;
            entity = {};
            golf = undefined;
            if(options) { _fun00002_ip = 95; continue _fun00001 }
 92:
            golf = offset;
 95:
            entity['onPress'] = golf;
            entity['label'] = oscar;
            golf = _closure1_slot7;
            oscar = _closure1_slot0;
            report = _closure1_slot2;
            report = report[verify];
            report = oscar.bind(zulu)(report);
            report = report.FormRow;
            oscar = report.Checkmark;
            report = {};
            report['selected'] = options;
            report = golf.bind(zulu)(oscar, report);
            entity['trailing'] = report;
            entity = tango.bind(zulu)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot10 = entity;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    golf = oscar[entity];
    tango = argCorge;
    entity = undefined;
    tango = tango.bind(entity)(golf);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.View;
    var _closure1_slot4 = golf;
    tango = tango.ScrollView;
    var _closure1_slot5 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = yankee.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 3;
    golf = oscar[tango];
    golf = report.bind(entity)(golf);
    golf = golf.jsx;
    var _closure1_slot7 = golf;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsxs;
    var _closure1_slot8 = tango;
    tango = 4;
    tango = oscar[tango];
    options = report.bind(entity)(tango);
    golf = options.createStyles;
    tango = {};
    offset = 12;
    verify = {'marginTop': 16, 'marginHorizontal': 12};
    tango['text'] = verify;
    verify = {};
    romeo = 8;
    verify['marginTop'] = romeo;
    tango['section'] = verify;
    verify = {};
    verify['marginTop'] = offset;
    tango['generateCodeContainer'] = verify;
    verify = {};
    offset = 5;
    offset = oscar[offset];
    offset = yankee.bind(entity)(offset);
    offset = offset.colors;
    offset = offset.TEXT_BRAND;
    verify['color'] = offset;
    tango['generateCode'] = verify;
    tango = golf.bind(options)(tango);
    var _closure1_slot9 = tango;
    tango = 14;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/user_settings/native/UserSettingsAccountBackupCodes.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: UserSettingsAccountBackupCodes
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = _closure1_slot9;
            tango = undefined;
            sequence = entity.bind(tango)();
            var _closure2_slot0 = sequence;
            oscar = _closure1_slot0;
            options = _closure1_slot2;
            entity = 9;
            entity = options[entity];
            report = oscar.bind(tango)(entity);
            zulu = report.useStateFromStores;
            entity = _closure1_slot6;
            mike = new Array(1);
            mike[0] = entity;
            entity = function() {
                mike = _closure1_slot6;
                entity = mike.getBackupCodes;
                entity = entity.bind(mike)();
                return entity;
            };
            entity = zulu.bind(report)(mike, entity);
            var _closure2_slot1 = entity;
            report = _closure1_slot3;
            zulu = report.useMemo;
            mike = new Array(1);
            mike[0] = entity;
            entity = function() {
                zulu = new Array(0);
                var _closure3_slot0 = zulu;
                mike = new Array(0);
                var _closure3_slot1 = mike;
                report = _closure2_slot1;
                tango = report.forEach;
                entity = function(argFoo) {
                    _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                        tango = argFoo;
                        entity = tango.consumed;
                        if(entity) { _fun00006_ip = 31; continue _fun00005 }
 15:
                        zulu = _closure3_slot1;
                        entity = zulu.push;
                        entity = entity.bind(zulu)(tango);
                        _fun00006_ip = 45; continue _fun00005;
 31:
                        zulu = _closure3_slot0;
                        mike = zulu.push;
                        entity = mike.bind(zulu)(tango);
 45:
                        return entity;
                    }
                };
                entity = tango.bind(report)(entity);
                entity = {};
                entity['usedCodes'] = zulu;
                entity['unusedCodes'] = mike;
                return entity;
            };
            entity = zulu.bind(report)(entity, mike);
            result = entity.usedCodes;
            control = entity.unusedCodes;
            report = _closure1_slot3;
            zulu = report.useEffect;
            mike = function() {
                entity = function() {
                    zulu = _closure1_slot1;
                    mike = _closure1_slot2;
                    entity = 10;
                    mike = mike[entity];
                    entity = undefined;
                    zulu = zulu.bind(entity)(mike);
                    mike = zulu.clearBackupCodes;
                    mike = mike.bind(zulu)();
                    return entity;
                };
                return entity;
            };
            entity = new Array(0);
            entity = zulu.bind(report)(mike, entity);
            context = 11;
            entity = options[context];
            entity = oscar.bind(tango)(entity);
            report = entity.intl;
            zulu = report.format;
            entity = options[context];
            entity = oscar.bind(tango)(entity);
            entity = entity.t;
            mike = entity.OhmvYm;
            entity = {};
            offset = zulu.bind(report)(mike, entity);
            zulu = _closure1_slot7;
            mike = _closure1_slot5;
            entity = {};
            golf = _closure1_slot8;
            report = 12;
            report = options[report];
            report = oscar.bind(tango)(report);
            oscar = report.RedesignCompat;
            report = {};
            verify = offset.map;
            options = function(argFoo, argBar) {
                report = _closure1_slot7;
                mike = _closure1_slot0;
                zulu = _closure1_slot2;
                entity = 13;
                entity = zulu[entity];
                tango = undefined;
                entity = mike.bind(tango)(entity);
                zulu = entity.Text;
                mike = {};
                entity = _closure2_slot0;
                entity = entity.text;
                mike['style'] = entity;
                entity = 'text-sm/medium';
                mike['variant'] = entity;
                entity = argFoo;
                mike['children'] = entity;
                entity = argBar;
                entity = report.bind(tango)(zulu, mike, entity);
                return entity;
            };
            verify = verify.bind(offset)(options);
            options = new Array(4);
            options[0] = verify;
            verify = control.length;
            offset = 0;
            verify = verify > offset;
            if(!verify) { _fun00004_ip = 403; continue _fun00003 }
 267:
            foxtrot = _closure1_slot7;
            romeo = _closure1_slot4;
            yankee = {};
            backup = sequence.section;
            yankee['style'] = backup;
            sizing = _closure1_slot7;
            config = _closure1_slot0;
            output = _closure1_slot2;
            backup = 8;
            backup = output[backup];
            backup = config.bind(tango)(backup);
            kilo = backup.FormSection;
            backup = {};
            source = output[context];
            source = config.bind(tango)(source);
            vacuum = source.intl;
            source = vacuum.string;
            output = output[context];
            output = config.bind(tango)(output);
            output = output.t;
            output = output.zdzyFh;
            output = source.bind(vacuum)(output);
            backup['title'] = output;
            source = control.map;
            output = function(argFoo, argBar) {
                report = _closure1_slot7;
                tango = _closure1_slot10;
                zulu = {};
                entity = argFoo;
                entity = entity.code;
                zulu['code'] = entity;
                entity = false;
                zulu['showCheckMark'] = entity;
                mike = undefined;
                entity = argBar;
                entity = report.bind(mike)(tango, zulu, entity);
                return entity;
            };
            output = source.bind(control)(output);
            backup['children'] = output;
            backup = sizing.bind(tango)(kilo, backup);
            yankee['children'] = backup;
            verify = foxtrot.bind(tango)(romeo, yankee);
 403:
            options[1] = verify;
            verify = result.length;
            verify = verify > offset;
            if(!verify) { _fun00004_ip = 558; continue _fun00003 }
 422:
            romeo = _closure1_slot7;
            yankee = _closure1_slot4;
            offset = {};
            foxtrot = sequence.section;
            offset['style'] = foxtrot;
            kilo = _closure1_slot7;
            control = _closure1_slot0;
            sizing = _closure1_slot2;
            foxtrot = 8;
            foxtrot = sizing[foxtrot];
            foxtrot = control.bind(tango)(foxtrot);
            backup = foxtrot.FormSection;
            foxtrot = {};
            output = sizing[context];
            output = control.bind(tango)(output);
            source = output.intl;
            output = source.string;
            sizing = sizing[context];
            sizing = control.bind(tango)(sizing);
            sizing = sizing.t;
            sizing = sizing.FkFLDA;
            sizing = output.bind(source)(sizing);
            foxtrot['title'] = sizing;
            output = result.map;
            sizing = function(argFoo, argBar) {
                report = _closure1_slot7;
                tango = _closure1_slot10;
                zulu = {};
                entity = argFoo;
                entity = entity.code;
                zulu['code'] = entity;
                entity = true;
                zulu['showCheckMark'] = entity;
                mike = undefined;
                entity = argBar;
                entity = report.bind(mike)(tango, zulu, entity);
                return entity;
            };
            sizing = output.bind(result)(sizing);
            foxtrot['children'] = sizing;
            foxtrot = kilo.bind(tango)(backup, foxtrot);
            offset['children'] = foxtrot;
            verify = romeo.bind(tango)(yankee, offset);
 558:
            options[2] = verify;
            verify = argFoo;
            offset = verify.onGenerate;
            verify = null;
            verify = verify !== offset;
            if(!verify) { _fun00004_ip = 792; continue _fun00003 }
 583:
            romeo = _closure1_slot7;
            yankee = _closure1_slot4;
            offset = {};
            foxtrot = sequence.generateCodeContainer;
            offset['style'] = foxtrot;
            kilo = _closure1_slot7;
            record = _closure1_slot0;
            vacuum = _closure1_slot2;
            sizing = 8;
            foxtrot = vacuum[sizing];
            foxtrot = record.bind(tango)(foxtrot);
            backup = foxtrot.FormSection;
            foxtrot = {};
            result = _closure1_slot7;
            sizing = vacuum[sizing];
            sizing = record.bind(tango)(sizing);
            output = sizing.FormRow;
            sizing = {};
            control = _closure1_slot7;
            update = 13;
            update = vacuum[update];
            update = record.bind(tango)(update);
            source = update.Text;
            update = {};
            config = 'text-md/semibold';
            update['variant'] = config;
            sequence = sequence.generateCode;
            update['style'] = sequence;
            sequence = vacuum[context];
            sequence = record.bind(tango)(sequence);
            config = sequence.intl;
            sequence = config.string;
            vacuum = vacuum[context];
            vacuum = record.bind(tango)(vacuum);
            vacuum = vacuum.t;
            vacuum = vacuum.RIThUl;
            vacuum = sequence.bind(config)(vacuum);
            update['children'] = vacuum;
            update = control.bind(tango)(source, update);
            sizing['label'] = update;
            echo = function() { // Original name: onPress
                zulu = _closure1_slot6;
                mike = zulu.getVerificationKey;
                report = mike.bind(zulu)();
                zulu = _closure1_slot1;
                mike = _closure1_slot2;
                entity = 10;
                mike = mike[entity];
                entity = undefined;
                tango = zulu.bind(entity)(mike);
                zulu = tango.confirmViewBackupCodes;
                mike = true;
                mike = zulu.bind(tango)(report, mike);
                return entity;
            };
            sizing['onPress'] = echo;
            sizing = result.bind(tango)(output, sizing);
            foxtrot['children'] = sizing;
            foxtrot = kilo.bind(tango)(backup, foxtrot);
            offset['children'] = foxtrot;
            verify = romeo.bind(tango)(yankee, offset);
 792:
            options[3] = verify;
            report['children'] = options;
            report = golf.bind(tango)(oscar, report);
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();