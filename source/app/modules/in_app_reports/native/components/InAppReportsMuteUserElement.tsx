// app/modules/in_app_reports/native/components/InAppReportsMuteUserElement.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
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
    options = oscar[tango];
    tango = argCorge;
    tango = tango.bind(entity)(options);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.AnalyticEvents;
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.MuteUntilSeconds;
    var _closure1_slot7 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsx;
    var _closure1_slot8 = tango;
    tango = 14;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/in_app_reports/native/components/InAppReportsMuteUserElement.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: MuteUserElement
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            mike = entity.user;
            var _closure2_slot0 = mike;
            yankee = entity.channelId;
            var _closure2_slot1 = yankee;
            offset = entity.reportId;
            var _closure2_slot2 = offset;
            report = undefined;
            var _closure2_slot5 = report;
            entity = _closure1_slot5;
            oscar = entity.getDMFromUserId;
            tango = mike.id;
            romeo = oscar.bind(entity)(tango);
            var _closure2_slot3 = romeo;
            oscar = _closure1_slot0;
            options = _closure1_slot2;
            tango = 6;
            tango = options[tango];
            verify = oscar.bind(report)(tango);
            options = verify.useStateFromStores;
            oscar = new Array(1);
            oscar[0] = entity;
            tango = new Array(1);
            tango[0] = yankee;
            entity = function() {
                zulu = _closure1_slot5;
                mike = zulu.getChannel;
                entity = _closure2_slot1;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            entity = options.bind(verify)(oscar, entity, tango);
            var _closure2_slot4 = entity;
            options = _closure1_slot4;
            oscar = options.useMemo;
            tango = new Array(2);
            tango[0] = entity;
            tango[1] = mike;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    zulu = _closure1_slot1;
                    mike = _closure1_slot2;
                    entity = 7;
                    entity = mike[entity];
                    mike = undefined;
                    report = zulu.bind(mike)(entity);
                    tango = report.getName;
                    zulu = _closure2_slot4;
                    golf = null;
                    oscar = golf == zulu;
                    zulu = undefined;
                    if(oscar) { _fun00004_ip = 58; continue _fun00003 }
 49:
                    oscar = _closure2_slot4;
                    zulu = oscar.guild_id;
 58:
                    oscar = _closure2_slot4;
                    oscar = golf == oscar;
                    mike = undefined;
                    if(oscar) { _fun00004_ip = 80; continue _fun00003 }
 71:
                    oscar = _closure2_slot4;
                    mike = oscar.id;
 80:
                    entity = _closure2_slot0;
                    entity = tango.bind(report)(zulu, mike, entity);
                    return entity;
                }
            };
            kilo = oscar.bind(options)(entity, tango);
            oscar = options.useMemo;
            tango = new Array(1);
            tango[0] = romeo;
            entity = function() {
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 8;
                mike = mike[entity];
                entity = undefined;
                zulu = zulu.bind(entity)(mike);
                mike = zulu.getMuteSettings;
                entity = _closure2_slot3;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            entity = oscar.bind(options)(entity, tango);
            verify = entity.muted;
            oscar = options.useState;
            entity = null;
            tango = entity != verify;
            if(!tango) { _fun00002_ip = 202; continue _fun00001 }
 199:
            tango = verify;
 202:
            options = oscar.bind(options)(tango);
            oscar = _closure1_slot3;
            tango = 2;
            oscar = oscar.bind(report)(options, tango);
            tango = 0;
            verify = oscar[tango];
            tango = 1;
            tango = oscar[tango];
            _closure2_slot5 = tango;
            options = _closure1_slot4;
            oscar = options.useCallback;
            tango = new Array(4);
            tango[0] = romeo;
            tango[1] = yankee;
            tango[2] = mike;
            tango[3] = offset;
            zulu = function() {
                tango = _closure2_slot5;
                entity = undefined;
                zulu = true;
                zulu = tango.bind(entity)(zulu);
                report = _closure1_slot1;
                oscar = _closure1_slot2;
                zulu = 9;
                zulu = oscar[zulu];
                offset = report.bind(entity)(zulu);
                options = offset.trackWithMetadata;
                zulu = _closure1_slot6;
                golf = zulu.IAR_MUTE_USER_BUTTON_CLICKED;
                tango = {};
                zulu = _closure2_slot0;
                yankee = zulu.id;
                tango['other_user_id'] = yankee;
                yankee = _closure2_slot2;
                tango['report_id'] = yankee;
                tango = options.bind(offset)(golf, tango);
                golf = _closure1_slot0;
                tango = 8;
                tango = oscar[tango];
                options = golf.bind(entity)(tango);
                golf = options.handleMuteSettingPress;
                tango = {};
                offset = _closure2_slot3;
                tango['channelId'] = offset;
                offset = null;
                tango['guildId'] = offset;
                verify = _closure1_slot7;
                verify = verify.ALWAYS;
                tango['muteDurationSeconds'] = verify;
                tango = golf.bind(options)(tango);
                tango = 10;
                tango = oscar[tango];
                report = report.bind(entity)(tango);
                tango = report.showMuteSuccessToast;
                zulu = zulu.id;
                mike = _closure2_slot1;
                mike = tango.bind(report)(zulu, mike);
                return entity;
            };
            oscar = oscar.bind(options)(zulu, tango);
            mike = entity == mike;
            entity = null;
            if(mike) { _fun00002_ip = 529; continue _fun00001 }
 289:
            tango = _closure1_slot8;
            zulu = _closure1_slot1;
            options = _closure1_slot2;
            mike = 11;
            mike = options[mike];
            zulu = zulu.bind(report)(mike);
            mike = {};
            golf = _closure1_slot0;
            offset = 12;
            yankee = options[offset];
            yankee = golf.bind(report)(yankee);
            backup = yankee.intl;
            foxtrot = backup.formatToPlainString;
            yankee = options[offset];
            yankee = golf.bind(report)(yankee);
            yankee = yankee.t;
            romeo = yankee.TRp5wc;
            yankee = {};
            yankee['username'] = kilo;
            yankee = foxtrot.bind(backup)(romeo, yankee);
            mike['title'] = yankee;
            yankee = options[offset];
            yankee = golf.bind(report)(yankee);
            backup = yankee.intl;
            foxtrot = backup.formatToPlainString;
            yankee = options[offset];
            yankee = golf.bind(report)(yankee);
            yankee = yankee.t;
            romeo = yankee.raALh4;
            yankee = {};
            yankee['username'] = kilo;
            yankee = foxtrot.bind(backup)(romeo, yankee);
            mike['disabledTitle'] = yankee;
            yankee = options[offset];
            yankee = golf.bind(report)(yankee);
            romeo = yankee.intl;
            yankee = romeo.string;
            offset = options[offset];
            offset = golf.bind(report)(offset);
            offset = offset.t;
            offset = offset.yM/+AA;
            offset = yankee.bind(romeo)(offset);
            mike['description'] = offset;
            mike['disabled'] = verify;
            mike['onPress'] = oscar;
            oscar = 13;
            oscar = options[oscar];
            oscar = golf.bind(report)(oscar);
            golf = oscar.BellSlashIcon;
            oscar = {};
            oscar = tango.bind(report)(golf, oscar);
            mike['icon'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 529:
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();