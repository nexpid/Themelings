// app/modules/mfa/native/screens/BackupScreen.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function(argFoo) { // Original name: isValidClipboardCode
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zulu = argFoo;
            tango = zulu.length;
            golf = _closure1_slot0;
            entity = _closure1_slot2;
            oscar = 4;
            entity = entity[oscar];
            report = undefined;
            entity = golf.bind(report)(entity);
            entity = entity.BACKUP_CODE_MIN_LENGTH;
            entity = tango >= entity;
            if(!entity) { _fun00002_ip = 78; continue _fun00001 }
 46:
            zulu = zulu.length;
            tango = _closure1_slot0;
            mike = _closure1_slot2;
            mike = mike[oscar];
            mike = tango.bind(report)(mike);
            mike = mike.BACKUP_CODE_MAX_LENGTH;
            entity = zulu <= mike;
 78:
            return entity;
        }
    };
    var _closure1_slot7 = entity;
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
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    golf = oscar[tango];
    tango = argCorge;
    tango = tango.bind(entity)(golf);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsx;
    var _closure1_slot6 = tango;
    tango = 9;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/mfa/native/screens/BackupScreen.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: BackupScreen
        entity = argFoo;
        golf = entity.mfaChallenge;
        oscar = entity.finish;
        var _closure2_slot0 = oscar;
        report = _closure1_slot5;
        mike = report.useState;
        entity = false;
        entity = mike.bind(report)(entity);
        yankee = _closure1_slot4;
        tango = undefined;
        options = 2;
        entity = yankee.bind(tango)(entity, options);
        zulu = 0;
        backup = entity[zulu];
        mike = 1;
        entity = entity[mike];
        var _closure2_slot1 = entity;
        offset = report.useState;
        entity = '';
        entity = offset.bind(report)(entity);
        entity = yankee.bind(tango)(entity, options);
        offset = entity[zulu];
        var _closure2_slot2 = offset;
        entity = entity[mike];
        var _closure2_slot3 = entity;
        entity = report.useState;
        entity = entity.bind(report)(tango);
        entity = yankee.bind(tango)(entity, options);
        output = entity[zulu];
        entity = entity[mike];
        var _closure2_slot4 = entity;
        zulu = report.useCallback;
        entity = function() {
            tango = _closure1_slot3;
            zulu = undefined;
            mike = function* (argFoo) {
                entity = function* (argFoo) { // Original name: ?anon_0_
                    _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                        StartGenerator();
                        report = argFoo;
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(mike) { _fun00004_ip = 217; continue _fun00003 }
 13:
                        options = report;
                        mike = undefined;
                        oscar = undefined;
                        verify = undefined;
                        golf = _closure2_slot3;
                        golf = golf.bind(mike)(report);
                        golf = report.length;
                        offset = _closure1_slot0;
                        yankee = _closure1_slot2;
                        report = 4;
                        report = yankee[report];
                        report = offset.bind(mike)(report);
                        report = report.BACKUP_CODE_MIN_LENGTH;
                        if(!(golf !== report)) { _fun00004_ip = 86; continue _fun00003 }
 72:
                        report = _closure2_slot4;
                        report = report.bind(mike)(mike);
                        _fun00004_ip = 214; continue _fun00003;
 86:
                        golf = _closure2_slot1;
                        report = true;
                        report = golf.bind(mike)(report);
 97: // try_start_0
                        golf = _closure2_slot0;
                        report = {};
                        offset = 'backup';
                        report['mfaType'] = offset;
                        report['data'] = options;
                        report = golf.bind(mike)(report);
                        SaveGenerator(address=125);
 123:
                        return report;
 125:
                        ResumeGenerator(result_out_reg=4, return_bool_out_reg=6);
                        if(golf) { _fun00004_ip = 133; continue _fun00003 }
 131: // try_end0
                        _fun00004_ip = 203; continue _fun00003;
 133:
                        return report;
 136: // catch_target0
                        CatchBlockStart(arg_register=6);
                        tango = golf;
                        report = _closure2_slot4;
                        options = null;
                        offset = options == golf;
                        golf = undefined;
                        if(offset) { _fun00004_ip = 181; continue _fun00003 }
 156:
                        offset = tango;
                        offset = offset.body;
                        verify = offset;
                        offset = options == offset;
                        golf = undefined;
                        if(offset) { _fun00004_ip = 181; continue _fun00003 }
 176:
                        golf = verify.message;
 181:
                        oscar = golf;
                        if(!(options == golf)) { _fun00004_ip = 195; continue _fun00003 }
 188:
                        tango = tango.message;
                        _fun00004_ip = 198; continue _fun00003;
 195:
                        tango = oscar;
 198:
                        tango = report.bind(mike)(tango);
 203:
                        tango = _closure2_slot1;
                        zulu = false;
                        zulu = tango.bind(mike)(zulu);
 214:
                        return mike;
 217:
                        return entity;
                    }
                };
                return entity;
            };
            mike = tango.bind(zulu)(mike);
            var _closure3_slot0 = mike;
            entity = function() {
                entity = undefined;
                tango = _closure3_slot0;
                zulu = tango.apply;
                entity = arguments;
                mike = entity;
                entity = this;
                entity = zulu.bind(tango)(entity, mike);
                return entity;
            };
            return entity;
        };
        mike = entity.bind(tango)();
        entity = new Array(1);
        entity[0] = oscar;
        result = zulu.bind(report)(mike, entity);
        var _closure2_slot5 = result;
        zulu = _closure1_slot6;
        options = _closure1_slot1;
        romeo = _closure1_slot2;
        entity = 5;
        entity = romeo[entity];
        mike = options.bind(tango)(entity);
        entity = {};
        yankee = _closure1_slot0;
        kilo = 6;
        report = romeo[kilo];
        report = yankee.bind(tango)(report);
        echo = report.intl;
        sizing = echo.string;
        report = romeo[kilo];
        report = yankee.bind(tango)(report);
        report = report.t;
        report = report.B2T1HB;
        report = sizing.bind(echo)(report);
        entity['headerText'] = report;
        report = 7;
        report = romeo[report];
        sizing = options.bind(tango)(report);
        report = {};
        echo = romeo[kilo];
        echo = yankee.bind(tango)(echo);
        source = echo.intl;
        update = source.string;
        echo = romeo[kilo];
        echo = yankee.bind(tango)(echo);
        echo = echo.t;
        echo = echo.C/ZAw8;
        echo = update.bind(source)(echo);
        report['label'] = echo;
        echo = romeo[kilo];
        echo = yankee.bind(tango)(echo);
        source = echo.intl;
        update = source.string;
        echo = romeo[kilo];
        echo = yankee.bind(tango)(echo);
        echo = echo.t;
        echo = echo.fZSi1N;
        echo = update.bind(source)(echo);
        report['placeholder'] = echo;
        verify = _closure1_slot7;
        report['isValidClipboardCode'] = verify;
        verify = 4;
        echo = romeo[verify];
        echo = yankee.bind(tango)(echo);
        echo = echo.BACKUP_CODE_MAX_LENGTH;
        report['maxLength'] = echo;
        report['onChangeCode'] = result;
        report['error'] = output;
        report = zulu.bind(tango)(sizing, report);
        entity['input'] = report;
        report = 8;
        report = romeo[report];
        options = options.bind(tango)(report);
        report = {};
        sizing = 'primary';
        report['variant'] = sizing;
        sizing = romeo[kilo];
        sizing = yankee.bind(tango)(sizing);
        output = sizing.intl;
        sizing = output.string;
        kilo = romeo[kilo];
        kilo = yankee.bind(tango)(kilo);
        kilo = kilo.t;
        kilo = kilo.geKm7u;
        kilo = sizing.bind(output)(kilo);
        report['text'] = kilo;
        report['loading'] = backup;
        foxtrot = function() { // Original name: onPress
            zulu = _closure2_slot5;
            mike = _closure2_slot2;
            entity = undefined;
            mike = zulu.bind(entity)(mike);
            return entity;
        };
        report['onPress'] = foxtrot;
        offset = offset.length;
        verify = romeo[verify];
        verify = yankee.bind(tango)(verify);
        verify = verify.BACKUP_CODE_MIN_LENGTH;
        verify = offset < verify;
        report['disabled'] = verify;
        report = zulu.bind(tango)(options, report);
        entity['submit'] = report;
        report = {};
        report['mfaChallenge'] = golf;
        report['finish'] = oscar;
        entity['screenProps'] = report;
        report = 'backup';
        entity['mfaMethod'] = report;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    zulu['default'] = mike;
    return entity;
})();