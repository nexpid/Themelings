// app/modules/mobile_native_updater/MobileNativeUpdateUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = golfie;
    entity = function() { // Original name: _checkForNewerBuild
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot2;
        zuuluu = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00002_ip = 462; continue _fun00001 }
 10:
                    zuuluu = _closure1_slot3;
                    michal = null;
                    if(!(michal !== zuuluu)) { _fun00002_ip = 459; continue _fun00001 }
 26:
                    report = _closure1_slot4;
                    tangon = report.info;
                    zuuluu = _closure1_slot3;
                    offset = zuuluu.url;
                    oscard = global;
                    zuuluu = oscard.HermesInternal;
                    option = zuuluu.concat;
                    golfie = 'Checking ';
                    zuuluu = ' for updates';
                    zuuluu = option.bind(golfie)(offset, zuuluu);
                    zuuluu = tangon.bind(report)(zuuluu);
                    report = _closure1_slot0;
                    tangon = _closure1_slot1;
                    zuuluu = 3;
                    tangon = tangon[zuuluu];
                    zuuluu = undefined;
                    zuuluu = report.bind(zuuluu)(tangon);
                    report = zuuluu.HTTP;
                    tangon = report.get;
                    zuuluu = {};
                    golfie = _closure1_slot3;
                    option = golfie.url;
                    golfie = option.toString;
                    golfie = golfie.bind(option)();
                    zuuluu['url'] = golfie;
                    golfie = {};
                    option = 'application/json';
                    golfie['Accept'] = option;
                    zuuluu['headers'] = golfie;
                    golfie = false;
                    zuuluu['rejectWithError'] = golfie;
                    zuuluu = tangon.bind(report)(zuuluu);
                    SaveGenerator(address=168);
 166:
                    return zuuluu;
 168:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(tangon) { _fun00002_ip = 456; continue _fun00001 }
 177:
                    tangon = zuuluu.ok;
                    if(tangon) { _fun00002_ip = 188; continue _fun00001 }
 186:
                    throw zuuluu;
 188:
                    report = {};
                    tangon = zuuluu.body;
                    tangon = tangon.build;
                    report['build'] = tangon;
                    tangon = zuuluu.body;
                    tangon = tangon.version;
                    report['version'] = tangon;
                    option = oscard.Date;
                    tangon = zuuluu.body;
                    sizing = tangon.build_timestamp;
                    golfie = option.prototype;
                    golfie = Object.create(golfie, {constructor: {value: option}});
                    output = golfie;
                    tangon = new output[option](sizing, kiloes);
                    tangon = tangon instanceof Object ? tangon : golfie;
                    report['buildTimestamp'] = tangon;
                    tangon = zuuluu.body;
                    tangon = tangon.urls;
                    report['urls'] = tangon;
                    golfie = report.build;
                    tangon = _closure1_slot3;
                    tangon = tangon.currentBuild;
                    if(!(golfie > tangon)) { _fun00002_ip = 324; continue _fun00001 }
 304:
                    golfie = report.version;
                    tangon = _closure1_slot3;
                    tangon = tangon.currentVersion;
                    if(!(!(golfie >= tangon))) { _fun00002_ip = 389; continue _fun00001 }
 324:
                    option = _closure1_slot4;
                    golfie = option.info;
                    foxtra = report.build;
                    tangon = _closure1_slot3;
                    romeon = tangon.currentBuild;
                    tangon = oscard.HermesInternal;
                    yankee = tangon.concat;
                    offset = 'Update build ';
                    tangon = ' is older than ';
                    tangon = yankee.bind(offset)(foxtra, tangon, romeon);
                    tangon = golfie.bind(option)(tangon);
                    tangon = null;
                    _fun00002_ip = 453; continue _fun00001;
 389:
                    option = _closure1_slot4;
                    golfie = option.info;
                    romeon = report.build;
                    verify = _closure1_slot3;
                    yankee = verify.currentBuild;
                    oscard = oscard.HermesInternal;
                    offset = oscard.concat;
                    verify = 'Update build ';
                    oscard = ' is newer than ';
                    oscard = offset.bind(verify)(romeon, oscard, yankee);
                    oscard = golfie.bind(option)(oscard);
                    tangon = report;
 453:
                    return tangon;
 456:
                    return zuuluu;
 459:
                    return michal;
 462:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot5 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot5 = entity;
    michal = function(argFoo) { // Original name: openBuildInstallerUrl
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zuuluu = argFoo;
            entity = undefined;
            report = undefined;
            tangon = undefined;
 9: // try_start_0
            michal = global;
            golfie = michal.URL;
            offset = zuuluu;
            oscard = golfie.prototype;
            oscard = Object.create(oscard, {constructor: {value: golfie}});
            yankee = oscard;
            zuuluu = new yankee[golfie](offset, verify);
            zuuluu = zuuluu instanceof Object ? zuuluu : oscard;
            report = zuuluu;
            golfie = zuuluu.origin;
            option = _closure1_slot3;
            oscard = null;
            option = oscard == option;
            oscard = undefined;
            if(option) { _fun00004_ip = 82; continue _fun00003 }
 67:
            option = _closure1_slot3;
            option = option.url;
            oscard = option.origin;
 82:
            if(!(golfie === oscard)) { _fun00004_ip = 222; continue _fun00003 }
 89:
            golfie = _closure1_slot0;
            option = _closure1_slot1;
            oscard = 4;
            oscard = option[oscard];
            oscard = golfie.bind(entity)(oscard);
            oscard = oscard.default;
            tangon = oscard.openURLExternally;
            oscard = 5;
            oscard = option[oscard];
            golfie = golfie.bind(entity)(oscard);
            oscard = golfie.isIOS;
            oscard = oscard.bind(golfie)();
            if(oscard) { _fun00004_ip = 167; continue _fun00003 }
 145:
            golfie = tangon;
            option = report;
            oscard = option.toString;
            oscard = oscard.bind(option)();
            oscard = golfie.bind(entity)(oscard);
            _fun00004_ip = 220; continue _fun00003;
 167:
            golfie = _closure1_slot0;
            option = _closure1_slot1;
            oscard = 6;
            oscard = option[oscard];
            oscard = golfie.bind(entity)(oscard);
            oscard = oscard.WebBrowserType;
            golfie = oscard.SAFARI;
            oscard = tangon;
            option = report;
            tangon = option.toString;
            tangon = tangon.bind(option)();
            tangon = oscard.bind(entity)(tangon, golfie);
 220: // try_end0
            _fun00004_ip = 267; continue _fun00003;
 222: // try_start_1
            tangon = _closure1_slot4;
            zuuluu = tangon.error;
            oscard = report;
            michal = michal.HermesInternal;
            report = michal.concat;
            michal = 'Attempted to follow invalid install URL ';
            michal = report.bind(michal)(oscard);
            michal = zuuluu.bind(tangon)(michal);
 261: // try_end1
            michal = undefined;
            return michal;
 265: // catch_target0 // catch_target1
            CatchBlockStart(arg_register=1);
 267:
            return entity;
        }
    };
    var _closure1_slot6 = michal;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, report);
    entity = 0;
    option = golfie[entity];
    report = argBaz;
    entity = undefined;
    report = report.bind(entity)(option);
    var _closure1_slot2 = report;
    report = 1;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    report = report.UPDATE_CONFIG;
    var _closure1_slot3 = report;
    report = 2;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    verify = report.Logger;
    report = verify.prototype;
    option = Object.create(report, {constructor: {value: verify}});
    romeon = 'MobileNativeUpdateUtils';
    foxtra = option;
    report = new foxtra[verify](romeon, yankee);
    report = report instanceof Object ? report : option;
    var _closure1_slot4 = report;
    report = 7;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/mobile_native_updater/MobileNativeUpdateUtils.tsx';
    report = oscard.bind(golfie)(report);
    report = function() { // Original name: checkForNewerBuild
        entity = undefined;
        tangon = _closure1_slot5;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['checkForNewerBuild'] = report;
    tangon = function(argFoo) { // Original name: openBuildInstaller
        zuuluu = _closure1_slot6;
        entity = argFoo;
        entity = entity.urls;
        michal = entity.install;
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    zuuluu['openBuildInstaller'] = tangon;
    zuuluu['openBuildInstallerUrl'] = michal;
    return entity;
})();