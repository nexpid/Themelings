// app/modules/welcome_cta/WelcomeCTAUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = golf;
    var _closure1_slot1 = oscar;
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
    var _closure1_slot2 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.WELCOME_STICKERS;
    var _closure1_slot3 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.AnalyticEvents;
    var _closure1_slot4 = tango;
    tango = 6;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/welcome_cta/WelcomeCTAUtils.tsx';
    tango = report.bind(oscar)(tango);
    tango = function() { // Original name: pickHelloSticker
        _fun72344: for(var _fun72344_ip = 0; ; ) switch(_fun72344_ip) {
 0:
            zulu = _closure1_slot2;
            mike = zulu.getCurrentUser;
            zulu = mike.bind(zulu)();
            mike = null;
            tango = mike == zulu;
            oscar = undefined;
            report = undefined;
            if(tango) { _fun72344_ip = 34; continue _fun72344 }
 29:
            report = zulu.id;
 34:
            mike = mike != report;
            zulu = 0;
            if(!mike) { _fun72344_ip = 74; continue _fun72344 }
 43:
            tango = _closure1_slot0;
            golf = _closure1_slot1;
            mike = 3;
            mike = golf[mike];
            tango = tango.bind(oscar)(mike);
            mike = tango.extractTimestamp;
            zulu = mike.bind(tango)(report);
 74:
            mike = _closure1_slot3;
            entity = mike.length;
            entity = zulu % entity;
            entity = mike[entity];
            return entity;
        }
    };
    zulu['pickHelloSticker'] = tango;
    tango = function(argFoo) {
        _fun72345: for(var _fun72345_ip = 0; ; ) switch(_fun72345_ip) {
 0:
            zulu = _closure1_slot2;
            mike = zulu.getCurrentUser;
            zulu = mike.bind(zulu)();
            mike = null;
            tango = mike == zulu;
            report = undefined;
            oscar = undefined;
            if(tango) { _fun72345_ip = 34; continue _fun72345 }
 29:
            oscar = zulu.id;
 34:
            mike = mike != oscar;
            zulu = 0;
            if(!mike) { _fun72345_ip = 74; continue _fun72345 }
 43:
            tango = _closure1_slot0;
            golf = _closure1_slot1;
            mike = 3;
            mike = golf[mike];
            tango = tango.bind(report)(mike);
            mike = tango.extractTimestamp;
            zulu = mike.bind(tango)(oscar);
 74:
            tango = _closure1_slot0;
            oscar = _closure1_slot1;
            mike = 3;
            mike = oscar[mike];
            report = tango.bind(report)(mike);
            tango = report.extractTimestamp;
            mike = argFoo;
            mike = tango.bind(report)(mike);
            zulu = zulu + mike;
            mike = _closure1_slot3;
            entity = mike.length;
            entity = zulu % entity;
            entity = mike[entity];
            return entity;
        }
    };
    zulu['pickWelcomeSticker'] = tango;
    mike = function(argFoo, argBar, argBaz) {
        _fun72346: for(var _fun72346_ip = 0; ; ) switch(_fun72346_ip) {
 0:
            verify = argFoo;
            golf = argBar;
            options = argBaz;
            zulu = _closure1_slot0;
            tango = _closure1_slot1;
            mike = 4;
            report = tango[mike];
            entity = undefined;
            yankee = zulu.bind(entity)(report);
            offset = yankee.sendGreetMessage;
            report = verify.id;
            mike = tango[mike];
            foxtrot = zulu.bind(entity)(mike);
            romeo = foxtrot.getSendMessageOptionsForReply;
            mike = {};
            mike['channel'] = verify;
            mike['message'] = golf;
            verify = true;
            mike['shouldMention'] = verify;
            mike['showMentionToggle'] = verify;
            mike = romeo.bind(foxtrot)(mike);
            mike = offset.bind(yankee)(report, options, mike);
            mike = 5;
            mike = tango[mike];
            report = zulu.bind(entity)(mike);
            tango = report.track;
            mike = _closure1_slot4;
            zulu = mike.WELCOME_CTA_CLICKED;
            mike = {};
            mike['is_reply'] = verify;
            mike['sticker_id'] = options;
            golf = golf.author;
            golf = golf.id;
            mike['target_user'] = golf;
            golf = _closure1_slot2;
            oscar = golf.getCurrentUser;
            golf = oscar.bind(golf)();
            oscar = null;
            options = oscar == golf;
            oscar = undefined;
            if(options) { _fun72346_ip = 180; continue _fun72346 }
 175:
            oscar = golf.id;
 180:
            mike['sender'] = oscar;
            mike = tango.bind(report)(zulu, mike);
            return entity;
        }
    };
    zulu['handleWelcomeCtaClicked'] = mike;
    return entity;
})();