// app/modules/dm_settings_upsell/DmSettingsUpsellActionCreators.native.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscar;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, mike);
    entity = 0;
    mike = oscar[entity];
    entity = undefined;
    mike = report.bind(entity)(mike);
    golf = mike.DM_SETTINGS_UPSELL_LAST_SHOWN_KEY;
    var _closure1_slot3 = golf;
    mike = mike.DM_SETTINGS_UPSELL_LAST_SHOWN_MAX_TIME_MS;
    var _closure1_slot4 = mike;
    mike = {};
    tango = function(argFoo) { // Original name: openDmSettingsUpsellModal
        _fun123403: for(var _fun123403_ip = 0; ; ) switch(_fun123403_ip) {
 0:
            golf = argFoo;
            tango = _closure1_slot0;
            entity = _closure1_slot2;
            oscar = 1;
            zulu = entity[oscar];
            entity = undefined;
            zulu = tango.bind(entity)(zulu);
            report = zulu.Storage;
            tango = report.get;
            zulu = _closure1_slot3;
            zulu = tango.bind(report)(zulu);
            tango = global;
            report = tango.Date;
            tango = report.now;
            report = tango.bind(report)();
            tango = null;
            if(!(tango != zulu)) { _fun123403_ip = 138; continue _fun123403 }
 71:
            tango = report - zulu;
            zulu = _closure1_slot4;
            if(!(!(tango > zulu))) { _fun123403_ip = 138; continue _fun123403 }
 83:
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            zulu = 5;
            tango = offset[zulu];
            options = verify.bind(entity)(tango);
            tango = options.trackEvent;
            zulu = offset[zulu];
            zulu = verify.bind(entity)(zulu);
            zulu = zulu.DmUpsellActionTypes;
            zulu = zulu.SUPPRESSED_BY_COOLDOWN;
            zulu = tango.bind(options)(zulu, golf);
            _fun123403_ip = 247; continue _fun123403;
 138:
            options = _closure1_slot1;
            zulu = _closure1_slot2;
            tango = 2;
            tango = zulu[tango];
            yankee = options.bind(entity)(tango);
            offset = yankee.openLazy;
            tango = _closure1_slot0;
            options = 4;
            options = zulu[options];
            romeo = tango.bind(entity)(options);
            options = 3;
            verify = zulu[options];
            options = zulu.paths;
            verify = romeo.bind(entity)(verify, options);
            options = {};
            options['guildId'] = golf;
            golf = 'dm_settings_upsell_modal';
            golf = offset.bind(yankee)(verify, golf, options);
            zulu = zulu[oscar];
            zulu = tango.bind(entity)(zulu);
            tango = zulu.Storage;
            zulu = tango.set;
            mike = _closure1_slot3;
            mike = zulu.bind(tango)(mike, report);
 247:
            return entity;
        }
    };
    mike['openDmSettingsUpsellModal'] = tango;
    tango = 6;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/dm_settings_upsell/DmSettingsUpsellActionCreators.native.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();