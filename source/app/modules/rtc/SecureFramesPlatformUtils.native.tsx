// app/modules/rtc/SecureFramesPlatformUtils.native.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
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
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, mike);
    entity = 0;
    mike = oscar[entity];
    entity = undefined;
    mike = golf.bind(entity)(mike);
    var _closure1_slot3 = mike;
    mike = 1;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot4 = mike;
    mike = 2;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    golf = mike.SECURE_FRAMES_LINKING_BOTTOM_SHEET_KEY;
    var _closure1_slot5 = golf;
    golf = mike.SECURE_FRAMES_STREAM_VERIFICATION_BOTTOM_SHEET_KEY;
    var _closure1_slot6 = golf;
    mike = mike.SECURE_FRAMES_USER_VERIFICATION_MODAL_KEY;
    var _closure1_slot7 = mike;
    mike = 3;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    golf = mike.ME;
    var _closure1_slot8 = golf;
    mike = mike.Routes;
    var _closure1_slot9 = mike;
    mike = {};
    golf = function(argFoo, argBar) { // Original name: openSecureFramesStreamVerification
        report = _closure1_slot1;
        zulu = _closure1_slot2;
        entity = 7;
        tango = zulu[entity];
        entity = undefined;
        oscar = report.bind(entity)(tango);
        report = oscar.openLazy;
        golf = _closure1_slot0;
        tango = 6;
        tango = zulu[tango];
        golf = golf.bind(entity)(tango);
        tango = 8;
        tango = zulu[tango];
        zulu = zulu.paths;
        tango = golf.bind(entity)(tango, zulu);
        zulu = _closure1_slot6;
        mike = {};
        golf = argFoo;
        mike['streamKey'] = golf;
        golf = argBar;
        mike['channelId'] = golf;
        mike = report.bind(oscar)(tango, zulu, mike);
        return entity;
    };
    mike['openSecureFramesStreamVerification'] = golf;
    golf = function(argFoo, argBar, argBaz) { // Original name: openSecureFramesUserVerificationModal
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            mike = argBaz;
            entity = undefined;
            mike = mike.bind(entity)();
            if(!mike) { _fun00002_ip = 102; continue _fun00001 }
 12:
            report = _closure1_slot1;
            zulu = _closure1_slot2;
            tango = 4;
            tango = zulu[tango];
            oscar = report.bind(entity)(tango);
            report = oscar.pushLazy;
            golf = _closure1_slot0;
            tango = 6;
            tango = zulu[tango];
            golf = golf.bind(entity)(tango);
            tango = 5;
            tango = zulu[tango];
            zulu = zulu.paths;
            tango = golf.bind(entity)(tango, zulu);
            zulu = {};
            golf = argFoo;
            zulu['userId'] = golf;
            golf = argBar;
            zulu['channelId'] = golf;
            mike = _closure1_slot7;
            mike = report.bind(oscar)(tango, zulu, mike);
 102:
            return entity;
        }
    };
    mike['openSecureFramesUserVerificationModal'] = golf;
    golf = function(argFoo) { // Original name: openSecureFramesUpdateConfirmation
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zulu = argFoo;
            offset = zulu.title;
            verify = zulu.subtitle;
            golf = zulu.confirmText;
            entity = undefined;
            if(!(golf === entity)) { _fun00004_ip = 86; continue _fun00003 }
 28:
            options = _closure1_slot0;
            yankee = _closure1_slot2;
            tango = 9;
            report = yankee[tango];
            report = options.bind(entity)(report);
            oscar = report.intl;
            report = oscar.string;
            tango = yankee[tango];
            tango = options.bind(entity)(tango);
            tango = tango.t;
            tango = tango.cY+Ooa;
            golf = report.bind(oscar)(tango);
 86:
            zulu = zulu.onConfirm;
            var _closure2_slot0 = zulu;
            tango = _closure1_slot1;
            options = _closure1_slot2;
            zulu = 10;
            zulu = options[zulu];
            report = tango.bind(entity)(zulu);
            tango = report.confirm;
            zulu = {};
            zulu['title'] = offset;
            zulu['body'] = verify;
            zulu['confirmText'] = golf;
            golf = _closure1_slot0;
            oscar = 9;
            verify = options[oscar];
            verify = golf.bind(entity)(verify);
            offset = verify.intl;
            verify = offset.string;
            oscar = options[oscar];
            oscar = golf.bind(entity)(oscar);
            oscar = oscar.t;
            oscar = oscar.ETE/oK;
            oscar = verify.bind(offset)(oscar);
            zulu['cancelText'] = oscar;
            oscar = 11;
            oscar = options[oscar];
            oscar = golf.bind(entity)(oscar);
            oscar = oscar.ButtonColors;
            oscar = oscar.RED;
            zulu['confirmColor'] = oscar;
            tango = tango.bind(report)(zulu);
            zulu = tango.then;
            mike = function(argFoo) {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    entity = argFoo;
                    if(!entity) { _fun00006_ip = 19; continue _fun00005 }
 6:
                    mike = _closure2_slot0;
                    entity = undefined;
                    entity = mike.bind(entity)();
 19:
                    entity = undefined;
                    return entity;
                }
            };
            mike = zulu.bind(tango)(mike);
            return entity;
        }
    };
    mike['openSecureFramesUpdateConfirmation'] = golf;
    tango = function(argFoo) { // Original name: handleSecureFramesUserVerificationLink
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = argFoo;
            offset = entity.userId;
            golf = entity.fingerprint;
            zulu = _closure1_slot4;
            entity = zulu.getChannelId;
            verify = entity.bind(zulu)();
            zulu = _closure1_slot3;
            entity = zulu.getChannel;
            tango = entity.bind(zulu)(verify);
            zulu = null;
            report = zulu == tango;
            entity = undefined;
            options = undefined;
            if(report) { _fun00008_ip = 68; continue _fun00007 }
 58:
            report = tango.getGuildId;
            options = report.bind(tango)();
 68:
            if(!(zulu == options)) { _fun00008_ip = 76; continue _fun00007 }
 72:
            options = _closure1_slot8;
 76:
            if(!(zulu != verify)) { _fun00008_ip = 87; continue _fun00007 }
 80:
            if(!(zulu == tango)) { _fun00008_ip = 228; continue _fun00007 }
 87:
            tango = _closure1_slot1;
            backup = _closure1_slot2;
            zulu = 10;
            zulu = backup[zulu];
            report = tango.bind(entity)(zulu);
            tango = report.show;
            zulu = {};
            foxtrot = _closure1_slot0;
            oscar = 9;
            yankee = backup[oscar];
            yankee = foxtrot.bind(entity)(yankee);
            kilo = yankee.intl;
            romeo = kilo.string;
            yankee = backup[oscar];
            yankee = foxtrot.bind(entity)(yankee);
            yankee = yankee.t;
            yankee = yankee.5ICxEx;
            yankee = romeo.bind(kilo)(yankee);
            zulu['title'] = yankee;
            yankee = backup[oscar];
            yankee = foxtrot.bind(entity)(yankee);
            romeo = yankee.intl;
            yankee = romeo.string;
            oscar = backup[oscar];
            oscar = foxtrot.bind(entity)(oscar);
            oscar = oscar.t;
            oscar = oscar.v1eXp6;
            oscar = yankee.bind(romeo)(oscar);
            zulu['body'] = oscar;
            zulu = tango.bind(report)(zulu);
            _fun00008_ip = 351; continue _fun00007;
 228:
            report = _closure1_slot1;
            zulu = _closure1_slot2;
            tango = 12;
            tango = zulu[tango];
            oscar = report.bind(entity)(tango);
            yankee = _closure1_slot9;
            tango = yankee.CHANNEL;
            tango = tango.bind(yankee)(options, verify);
            tango = oscar.bind(entity)(tango);
            tango = 7;
            tango = zulu[tango];
            oscar = report.bind(entity)(tango);
            report = oscar.openLazy;
            yankee = _closure1_slot0;
            tango = 6;
            tango = zulu[tango];
            yankee = yankee.bind(entity)(tango);
            tango = 13;
            tango = zulu[tango];
            zulu = zulu.paths;
            tango = yankee.bind(entity)(tango, zulu);
            zulu = _closure1_slot5;
            mike = {};
            mike['userId'] = offset;
            mike['channelId'] = verify;
            mike['guildId'] = options;
            mike['fingerprint'] = golf;
            mike = report.bind(oscar)(tango, zulu, mike);
 351:
            return entity;
        }
    };
    mike['handleSecureFramesUserVerificationLink'] = tango;
    tango = 14;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/rtc/SecureFramesPlatformUtils.native.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();