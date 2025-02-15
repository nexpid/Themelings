// app/modules/main_tabs_v2/native/settings/definitions/InternalBuildUpdateSetting.tsx
export default (function(_, argBar, argBaz, argCorge, __, argFred, argPlugh) {
    report = argBar;
    options = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = options;
    entity = argCorge;
    var _closure1_slot2 = entity;
    var _closure1_slot3 = oscar;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    mike = {};
    tango = true;
    mike['value'] = tango;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, mike);
    entity = 0;
    mike = oscar[entity];
    entity = undefined;
    mike = options.bind(entity)(mike);
    var _closure1_slot4 = mike;
    mike = 1;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    options = mike.RendererType;
    mike = 2;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    mike = mike.jsx;
    var _closure1_slot5 = mike;
    mike = {};
    options = options.PRESSABLE;
    mike['type'] = options;
    options = function() { // Original name: useInternalBuildUpdateTitle
        _fun99063: for(var _fun99063_ip = 0; ; ) switch(_fun99063_ip) {
 0:
            report = _closure1_slot0;
            golf = _closure1_slot3;
            zulu = 4;
            oscar = golf[zulu];
            tango = undefined;
            offset = report.bind(tango)(oscar);
            verify = offset.useStateFromStores;
            oscar = _closure1_slot4;
            options = new Array(1);
            options[0] = oscar;
            entity = function() {
                _fun99064: for(var _fun99064_ip = 0; ; ) switch(_fun99064_ip) {
 0:
                    mike = _closure1_slot4;
                    entity = mike.latestFetchedBuild;
                    entity = entity.bind(mike)();
                    mike = entity.newBuild;
                    entity = null;
                    zulu = entity == mike;
                    entity = undefined;
                    if(zulu) { _fun99064_ip = 40; continue _fun99064 }
 34:
                    entity = mike.build;
 40:
                    return entity;
                }
            };
            entity = verify.bind(offset)(options, entity);
            zulu = golf[zulu];
            report = report.bind(tango)(zulu);
            tango = report.useStateFromStores;
            zulu = new Array(1);
            zulu[0] = oscar;
            mike = function() {
                mike = _closure1_slot4;
                entity = mike.latestFetchedBuild;
                entity = entity.bind(mike)();
                entity = entity.lastCheck;
                return entity;
            };
            zulu = tango.bind(report)(zulu, mike);
            mike = null;
            tango = mike != entity;
            entity = 'Internal Build Update Ready';
            if(tango) { _fun99063_ip = 129; continue _fun99063 }
 107:
            zulu = mike != zulu;
            mike = 'Internal Build Refresh Error';
            if(!zulu) { _fun99063_ip = 126; continue _fun99063 }
 120:
            mike = 'Internal Build Up To Date';
 126:
            entity = mike;
 129:
            return entity;
        }
    };
    mike['title'] = options;
    options = null;
    mike['parent'] = options;
    options = function() { // Original name: InstallNativeUpdateIcon
        _fun99066: for(var _fun99066_ip = 0; ; ) switch(_fun99066_ip) {
 0:
            zulu = _closure1_slot0;
            tango = _closure1_slot3;
            entity = 4;
            entity = tango[entity];
            tango = undefined;
            oscar = zulu.bind(tango)(entity);
            report = oscar.useStateFromStores;
            entity = _closure1_slot4;
            zulu = new Array(1);
            zulu[0] = entity;
            entity = function() {
                mike = _closure1_slot4;
                entity = mike.latestFetchedBuild;
                entity = entity.bind(mike)();
                mike = entity.newBuild;
                entity = null;
                entity = entity !== mike;
                return entity;
            };
            entity = report.bind(oscar)(zulu, entity);
            zulu = _closure1_slot5;
            report = _closure1_slot0;
            oscar = _closure1_slot3;
            if(entity) { _fun99066_ip = 92; continue _fun99066 }
 72:
            entity = 8;
            entity = oscar[entity];
            entity = report.bind(tango)(entity);
            mike = entity.RefreshIcon;
            _fun99066_ip = 110; continue _fun99066;
 92:
            entity = 7;
            entity = oscar[entity];
            entity = report.bind(tango)(entity);
            mike = entity.DownloadIcon;
 110:
            entity = {};
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    mike['IconComponent'] = options;
    options = function() { // Original name: useInternalBuildUpdateDescription
        _fun99068: for(var _fun99068_ip = 0; ; ) switch(_fun99068_ip) {
 0:
            oscar = _closure1_slot0;
            golf = _closure1_slot3;
            zulu = 4;
            report = golf[zulu];
            tango = undefined;
            yankee = oscar.bind(tango)(report);
            offset = yankee.useStateFromStores;
            options = _closure1_slot4;
            verify = new Array(1);
            verify[0] = options;
            report = function() {
                _fun99069: for(var _fun99069_ip = 0; ; ) switch(_fun99069_ip) {
 0:
                    mike = _closure1_slot4;
                    entity = mike.latestFetchedBuild;
                    entity = entity.bind(mike)();
                    mike = entity.newBuild;
                    entity = null;
                    zulu = entity == mike;
                    entity = undefined;
                    if(zulu) { _fun99069_ip = 40; continue _fun99069 }
 34:
                    entity = mike.build;
 40:
                    return entity;
                }
            };
            report = offset.bind(yankee)(verify, report);
            zulu = golf[zulu];
            golf = oscar.bind(tango)(zulu);
            oscar = golf.useStateFromStores;
            zulu = new Array(1);
            zulu[0] = options;
            entity = function() {
                mike = _closure1_slot4;
                entity = mike.latestFetchedBuild;
                entity = entity.bind(mike)();
                entity = entity.lastCheck;
                return entity;
            };
            zulu = oscar.bind(golf)(zulu, entity);
            entity = null;
            if(!(entity == report)) { _fun99068_ip = 172; continue _fun99068 }
 98:
            oscar = entity != zulu;
            entity = 'Never refreshed';
            if(!oscar) { _fun99068_ip = 170; continue _fun99068 }
 111:
            oscar = _closure1_slot1;
            golf = _closure1_slot3;
            mike = 5;
            mike = golf[mike];
            mike = oscar.bind(tango)(mike);
            zulu = mike.bind(tango)(zulu);
            mike = zulu.fromNow;
            tango = mike.bind(zulu)();
            mike = global;
            mike = mike.HermesInternal;
            zulu = mike.concat;
            mike = 'Last refreshed ';
            entity = zulu.bind(mike)(tango);
 170:
            _fun99068_ip = 203; continue _fun99068;
 172:
            mike = global;
            mike = mike.HermesInternal;
            tango = mike.concat;
            zulu = 'Open build ';
            mike = ' installer in a browser';
            entity = tango.bind(zulu)(report, mike);
 203:
            return entity;
        }
    };
    mike['useDescription'] = options;
    options = function() { // Original name: useHasInternalBuildUpdateSetting
        _fun99071: for(var _fun99071_ip = 0; ; ) switch(_fun99071_ip) {
 0:
            tango = _closure1_slot0;
            zulu = _closure1_slot3;
            mike = 6;
            zulu = zulu[mike];
            mike = undefined;
            zulu = tango.bind(mike)(zulu);
            mike = zulu.useStaffOrDevEnvSettingPredicate;
            mike = mike.bind(zulu)();
            entity = _closure1_slot4;
            entity = entity.hasUpdatesConfigured;
            if(!entity) { _fun99071_ip = 51; continue _fun99071 }
 48:
            entity = mike;
 51:
            return entity;
        }
    };
    mike['usePredicate'] = options;
    golf = function() { // Original name: handleInstallNativeUpdateSettingPress
        _fun99072: for(var _fun99072_ip = 0; ; ) switch(_fun99072_ip) {
 0:
            zulu = _closure1_slot4;
            mike = zulu.latestFetchedBuild;
            mike = mike.bind(zulu)();
            zulu = mike.newBuild;
            mike = null;
            if(!(mike === zulu)) { _fun99072_ip = 45; continue _fun99072 }
 29:
            tango = _closure1_slot4;
            mike = tango.checkForNewerBuild;
            mike = mike.bind(tango)();
            _fun99072_ip = 78; continue _fun99072;
 45:
            tango = _closure1_slot2;
            mike = _closure1_slot3;
            entity = 3;
            mike = mike[entity];
            entity = undefined;
            mike = tango.bind(entity)(mike);
            entity = mike.openBuildInstaller;
            entity = entity.bind(mike)(zulu);
 78:
            entity = undefined;
            return entity;
        }
    };
    mike['onPress'] = golf;
    mike['withArrow'] = tango;
    tango = 9;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/main_tabs_v2/native/settings/definitions/InternalBuildUpdateSetting.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();