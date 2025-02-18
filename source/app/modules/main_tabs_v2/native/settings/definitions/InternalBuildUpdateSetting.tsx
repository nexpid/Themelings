// app/modules/main_tabs_v2/native/settings/definitions/InternalBuildUpdateSetting.tsx
export default (function(_, argBar, argBaz, argCor, __, argFre, argPlu) {
    report = argBar;
    option = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = option;
    entity = argCor;
    var _closure1_slot2 = entity;
    var _closure1_slot3 = oscard;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    michal = {};
    tangon = true;
    michal['value'] = tangon;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, michal);
    entity = 0;
    michal = oscard[entity];
    entity = undefined;
    michal = option.bind(entity)(michal);
    var _closure1_slot4 = michal;
    michal = 1;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    option = michal.RendererType;
    michal = 2;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    michal = michal.jsx;
    var _closure1_slot5 = michal;
    michal = {};
    option = option.PRESSABLE;
    michal['type'] = option;
    option = function() { // Original name: useInternalBuildUpdateTitle
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            report = _closure1_slot0;
            golfie = _closure1_slot3;
            zuuluu = 4;
            oscard = golfie[zuuluu];
            tangon = undefined;
            offset = report.bind(tangon)(oscard);
            verify = offset.useStateFromStores;
            oscard = _closure1_slot4;
            option = new Array(1);
            option[0] = oscard;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    michal = _closure1_slot4;
                    entity = michal.latestFetchedBuild;
                    entity = entity.bind(michal)();
                    michal = entity.newBuild;
                    entity = null;
                    zuuluu = entity == michal;
                    entity = undefined;
                    if(zuuluu) { _fun00004_ip = 40; continue _fun00003 }
 34:
                    entity = michal.build;
 40:
                    return entity;
                }
            };
            entity = verify.bind(offset)(option, entity);
            zuuluu = golfie[zuuluu];
            report = report.bind(tangon)(zuuluu);
            tangon = report.useStateFromStores;
            zuuluu = new Array(1);
            zuuluu[0] = oscard;
            michal = function() {
                michal = _closure1_slot4;
                entity = michal.latestFetchedBuild;
                entity = entity.bind(michal)();
                entity = entity.lastCheck;
                return entity;
            };
            zuuluu = tangon.bind(report)(zuuluu, michal);
            michal = null;
            tangon = michal != entity;
            entity = 'Internal Build Update Ready';
            if(tangon) { _fun00002_ip = 129; continue _fun00001 }
 107:
            zuuluu = michal != zuuluu;
            michal = 'Internal Build Refresh Error';
            if(!zuuluu) { _fun00002_ip = 126; continue _fun00001 }
 120:
            michal = 'Internal Build Up To Date';
 126:
            entity = michal;
 129:
            return entity;
        }
    };
    michal['title'] = option;
    option = null;
    michal['parent'] = option;
    option = function() { // Original name: InstallNativeUpdateIcon
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot3;
            entity = 4;
            entity = tangon[entity];
            tangon = undefined;
            oscard = zuuluu.bind(tangon)(entity);
            report = oscard.useStateFromStores;
            entity = _closure1_slot4;
            zuuluu = new Array(1);
            zuuluu[0] = entity;
            entity = function() {
                michal = _closure1_slot4;
                entity = michal.latestFetchedBuild;
                entity = entity.bind(michal)();
                michal = entity.newBuild;
                entity = null;
                entity = entity !== michal;
                return entity;
            };
            entity = report.bind(oscard)(zuuluu, entity);
            zuuluu = _closure1_slot5;
            report = _closure1_slot0;
            oscard = _closure1_slot3;
            if(entity) { _fun00006_ip = 92; continue _fun00005 }
 72:
            entity = 8;
            entity = oscard[entity];
            entity = report.bind(tangon)(entity);
            michal = entity.RefreshIcon;
            _fun00006_ip = 110; continue _fun00005;
 92:
            entity = 7;
            entity = oscard[entity];
            entity = report.bind(tangon)(entity);
            michal = entity.DownloadIcon;
 110:
            entity = {};
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    michal['IconComponent'] = option;
    option = function() { // Original name: useInternalBuildUpdateDescription
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            oscard = _closure1_slot0;
            golfie = _closure1_slot3;
            zuuluu = 4;
            report = golfie[zuuluu];
            tangon = undefined;
            yankee = oscard.bind(tangon)(report);
            offset = yankee.useStateFromStores;
            option = _closure1_slot4;
            verify = new Array(1);
            verify[0] = option;
            report = function() {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    michal = _closure1_slot4;
                    entity = michal.latestFetchedBuild;
                    entity = entity.bind(michal)();
                    michal = entity.newBuild;
                    entity = null;
                    zuuluu = entity == michal;
                    entity = undefined;
                    if(zuuluu) { _fun00010_ip = 40; continue _fun00009 }
 34:
                    entity = michal.build;
 40:
                    return entity;
                }
            };
            report = offset.bind(yankee)(verify, report);
            zuuluu = golfie[zuuluu];
            golfie = oscard.bind(tangon)(zuuluu);
            oscard = golfie.useStateFromStores;
            zuuluu = new Array(1);
            zuuluu[0] = option;
            entity = function() {
                michal = _closure1_slot4;
                entity = michal.latestFetchedBuild;
                entity = entity.bind(michal)();
                entity = entity.lastCheck;
                return entity;
            };
            zuuluu = oscard.bind(golfie)(zuuluu, entity);
            entity = null;
            if(!(entity == report)) { _fun00008_ip = 172; continue _fun00007 }
 98:
            oscard = entity != zuuluu;
            entity = 'Never refreshed';
            if(!oscard) { _fun00008_ip = 170; continue _fun00007 }
 111:
            oscard = _closure1_slot1;
            golfie = _closure1_slot3;
            michal = 5;
            michal = golfie[michal];
            michal = oscard.bind(tangon)(michal);
            zuuluu = michal.bind(tangon)(zuuluu);
            michal = zuuluu.fromNow;
            tangon = michal.bind(zuuluu)();
            michal = global;
            michal = michal.HermesInternal;
            zuuluu = michal.concat;
            michal = 'Last refreshed ';
            entity = zuuluu.bind(michal)(tangon);
 170:
            _fun00008_ip = 203; continue _fun00007;
 172:
            michal = global;
            michal = michal.HermesInternal;
            tangon = michal.concat;
            zuuluu = 'Open build ';
            michal = ' installer in a browser';
            entity = tangon.bind(zuuluu)(report, michal);
 203:
            return entity;
        }
    };
    michal['useDescription'] = option;
    option = function() { // Original name: useHasInternalBuildUpdateSetting
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot3;
            michal = 6;
            zuuluu = zuuluu[michal];
            michal = undefined;
            zuuluu = tangon.bind(michal)(zuuluu);
            michal = zuuluu.useStaffOrDevEnvSettingPredicate;
            michal = michal.bind(zuuluu)();
            entity = _closure1_slot4;
            entity = entity.hasUpdatesConfigured;
            if(!entity) { _fun00012_ip = 51; continue _fun00011 }
 48:
            entity = michal;
 51:
            return entity;
        }
    };
    michal['usePredicate'] = option;
    golfie = function() { // Original name: handleInstallNativeUpdateSettingPress
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            zuuluu = _closure1_slot4;
            michal = zuuluu.latestFetchedBuild;
            michal = michal.bind(zuuluu)();
            zuuluu = michal.newBuild;
            michal = null;
            if(!(michal === zuuluu)) { _fun00014_ip = 45; continue _fun00013 }
 29:
            tangon = _closure1_slot4;
            michal = tangon.checkForNewerBuild;
            michal = michal.bind(tangon)();
            _fun00014_ip = 78; continue _fun00013;
 45:
            tangon = _closure1_slot2;
            michal = _closure1_slot3;
            entity = 3;
            michal = michal[entity];
            entity = undefined;
            michal = tangon.bind(entity)(michal);
            entity = michal.openBuildInstaller;
            entity = entity.bind(michal)(zuuluu);
 78:
            entity = undefined;
            return entity;
        }
    };
    michal['onPress'] = golfie;
    michal['withArrow'] = tangon;
    tangon = 9;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/main_tabs_v2/native/settings/definitions/InternalBuildUpdateSetting.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();