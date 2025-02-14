// app/modules/mobile_native_updater/MobileNativeUpdateUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBar;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = golf;
    entity = function() { // Original name: _checkForNewerBuild
        report = undefined;
        entity = undefined;
        tango = _closure1_slot2;
        zulu = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun99048: for(var _fun99048_ip = 0; ; ) switch(_fun99048_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun99048_ip = 464; continue _fun99048 }
 10:
                    zulu = _closure1_slot3;
                    mike = null;
                    if(!(mike !== zulu)) { _fun99048_ip = 461; continue _fun99048 }
 26:
                    report = _closure1_slot4;
                    tango = report.info;
                    zulu = _closure1_slot3;
                    offset = zulu.url;
                    oscar = global;
                    zulu = oscar.HermesInternal;
                    options = zulu.concat;
                    golf = 'Checking ';
                    zulu = ' for updates';
                    zulu = options.bind(golf)(offset, zulu);
                    zulu = tango.bind(report)(zulu);
                    report = _closure1_slot0;
                    tango = _closure1_slot1;
                    zulu = 3;
                    tango = tango[zulu];
                    zulu = undefined;
                    zulu = report.bind(zulu)(tango);
                    report = zulu.HTTP;
                    tango = report.get;
                    zulu = {};
                    golf = _closure1_slot3;
                    options = golf.url;
                    golf = options.toString;
                    golf = golf.bind(options)();
                    zulu['url'] = golf;
                    golf = {};
                    options = 'application/json';
                    golf['Accept'] = options;
                    zulu['headers'] = golf;
                    golf = false;
                    zulu['rejectWithError'] = golf;
                    zulu = tango.bind(report)(zulu);
                    SaveGenerator(address=168);
 166:
                    return zulu;
 168:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(tango) { _fun99048_ip = 458; continue _fun99048 }
 177:
                    tango = zulu.ok;
                    if(tango) { _fun99048_ip = 188; continue _fun99048 }
 186:
                    throw zulu;
 188:
                    report = {};
                    tango = zulu.body;
                    tango = tango.build;
                    report['build'] = tango;
                    tango = zulu.body;
                    tango = tango.version;
                    report['version'] = tango;
                    options = oscar.Date;
                    tango = zulu.body;
                    sizing = tango.build_timestamp;
                    golf = options.prototype;
                    golf = Object.create(golf, {constructor: {value: options}});
                    output = golf;
                    tango = new output[options](sizing, kilo);
                    tango = tango instanceof Object ? tango : golf;
                    report['buildTimestamp'] = tango;
                    tango = zulu.body;
                    tango = tango.urls;
                    report['urls'] = tango;
                    golf = report.build;
                    tango = _closure1_slot3;
                    tango = tango.currentBuild;
                    if(!(golf > tango)) { _fun99048_ip = 326; continue _fun99048 }
 304:
                    golf = report.version;
                    tango = _closure1_slot3;
                    tango = tango.currentVersion;
                    if(!(!(golf >= tango))) { _fun99048_ip = 391; continue _fun99048 }
 326:
                    options = _closure1_slot4;
                    golf = options.info;
                    foxtrot = report.build;
                    tango = _closure1_slot3;
                    romeo = tango.currentBuild;
                    tango = oscar.HermesInternal;
                    yankee = tango.concat;
                    offset = 'Update build ';
                    tango = ' is older than ';
                    tango = yankee.bind(offset)(foxtrot, tango, romeo);
                    tango = golf.bind(options)(tango);
                    tango = null;
                    _fun99048_ip = 455; continue _fun99048;
 391:
                    options = _closure1_slot4;
                    golf = options.info;
                    romeo = report.build;
                    verify = _closure1_slot3;
                    yankee = verify.currentBuild;
                    oscar = oscar.HermesInternal;
                    offset = oscar.concat;
                    verify = 'Update build ';
                    oscar = ' is newer than ';
                    oscar = offset.bind(verify)(romeo, oscar, yankee);
                    oscar = golf.bind(options)(oscar);
                    tango = report;
 455:
                    return tango;
 458:
                    return zulu;
 461:
                    return mike;
 464:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot5 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot5 = entity;
    mike = function(argFoo) { // Original name: openBuildInstallerUrl
        _fun99049: for(var _fun99049_ip = 0; ; ) switch(_fun99049_ip) {
 0:
            zulu = argFoo;
            entity = undefined;
            report = undefined;
            tango = undefined;
 9: // try_start_0
            mike = global;
            golf = mike.URL;
            offset = zulu;
            oscar = golf.prototype;
            oscar = Object.create(oscar, {constructor: {value: golf}});
            yankee = oscar;
            zulu = new yankee[golf](offset, verify);
            zulu = zulu instanceof Object ? zulu : oscar;
            report = zulu;
            golf = zulu.origin;
            options = _closure1_slot3;
            oscar = null;
            options = oscar == options;
            oscar = undefined;
            if(options) { _fun99049_ip = 82; continue _fun99049 }
 67:
            options = _closure1_slot3;
            options = options.url;
            oscar = options.origin;
 82:
            if(!(golf === oscar)) { _fun99049_ip = 222; continue _fun99049 }
 89:
            golf = _closure1_slot0;
            options = _closure1_slot1;
            oscar = 4;
            oscar = options[oscar];
            oscar = golf.bind(entity)(oscar);
            oscar = oscar.default;
            tango = oscar.openURLExternally;
            oscar = 5;
            oscar = options[oscar];
            golf = golf.bind(entity)(oscar);
            oscar = golf.isIOS;
            oscar = oscar.bind(golf)();
            if(oscar) { _fun99049_ip = 167; continue _fun99049 }
 145:
            golf = tango;
            options = report;
            oscar = options.toString;
            oscar = oscar.bind(options)();
            oscar = golf.bind(entity)(oscar);
            _fun99049_ip = 220; continue _fun99049;
 167:
            golf = _closure1_slot0;
            options = _closure1_slot1;
            oscar = 6;
            oscar = options[oscar];
            oscar = golf.bind(entity)(oscar);
            oscar = oscar.WebBrowserType;
            golf = oscar.SAFARI;
            oscar = tango;
            options = report;
            tango = options.toString;
            tango = tango.bind(options)();
            tango = oscar.bind(entity)(tango, golf);
 220: // try_end0
            _fun99049_ip = 267; continue _fun99049;
 222: // try_start_1
            tango = _closure1_slot4;
            zulu = tango.error;
            oscar = report;
            mike = mike.HermesInternal;
            report = mike.concat;
            mike = 'Attempted to follow invalid install URL ';
            mike = report.bind(mike)(oscar);
            mike = zulu.bind(tango)(mike);
 261: // try_end1
            mike = undefined;
            return mike;
 265: // catch_target0 // catch_target1
            CatchBlockStart(arg_register=1);
 267:
            return entity;
        }
    };
    var _closure1_slot6 = mike;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, report);
    entity = 0;
    options = golf[entity];
    report = argBaz;
    entity = undefined;
    report = report.bind(entity)(options);
    var _closure1_slot2 = report;
    report = 1;
    report = golf[report];
    report = oscar.bind(entity)(report);
    report = report.UPDATE_CONFIG;
    var _closure1_slot3 = report;
    report = 2;
    report = golf[report];
    report = oscar.bind(entity)(report);
    verify = report.Logger;
    report = verify.prototype;
    options = Object.create(report, {constructor: {value: verify}});
    romeo = 'MobileNativeUpdateUtils';
    foxtrot = options;
    report = new foxtrot[verify](romeo, yankee);
    report = report instanceof Object ? report : options;
    var _closure1_slot4 = report;
    report = 7;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/mobile_native_updater/MobileNativeUpdateUtils.tsx';
    report = oscar.bind(golf)(report);
    report = function() { // Original name: checkForNewerBuild
        entity = undefined;
        tango = _closure1_slot5;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['checkForNewerBuild'] = report;
    tango = function(argFoo) { // Original name: openBuildInstaller
        zulu = _closure1_slot6;
        entity = argFoo;
        entity = entity.urls;
        mike = entity.install;
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    zulu['openBuildInstaller'] = tango;
    zulu['openBuildInstallerUrl'] = mike;
    return entity;
})();