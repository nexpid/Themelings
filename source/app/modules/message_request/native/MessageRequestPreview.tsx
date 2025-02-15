// app/modules/message_request/native/MessageRequestPreview.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    output = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = output;
    var _closure1_slot2 = oscar;
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
    options = tango.bind(entity)(golf);
    var _closure1_slot3 = options;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.View;
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = output.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    backup = tango.Fonts;
    golf = tango.AnalyticEvents;
    var _closure1_slot6 = golf;
    tango = tango.MessageFlags;
    var _closure1_slot7 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsx;
    var _closure1_slot8 = tango;
    tango = 5;
    tango = oscar[tango];
    offset = report.bind(entity)(tango);
    verify = offset.createStyles;
    golf = {};
    yankee = {};
    tango = 'italic';
    yankee['fontStyle'] = tango;
    kilo = 6;
    tango = oscar[kilo];
    result = output.bind(entity)(tango);
    romeo = backup.PRIMARY_MEDIUM;
    foxtrot = 7;
    tango = oscar[foxtrot];
    tango = output.bind(entity)(tango);
    tango = tango.colors;
    tango = tango.TEXT_NORMAL;
    sizing = 12;
    update = result.bind(entity)(romeo, tango, sizing);
    source = yankee;
    tango = copyDataProperties(source, update);
    tango = 16;
    romeo = 'lineHeight';
    yankee[romeo] = tango;
    golf['systemContent'] = yankee;
    yankee = {};
    kilo = oscar[kilo];
    kilo = output.bind(entity)(kilo);
    backup = backup.PRIMARY_MEDIUM;
    foxtrot = oscar[foxtrot];
    foxtrot = output.bind(entity)(foxtrot);
    foxtrot = foxtrot.colors;
    foxtrot = foxtrot.TEXT_NORMAL;
    update = kilo.bind(entity)(backup, foxtrot, sizing);
    source = yankee;
    foxtrot = copyDataProperties(source, update);
    yankee[romeo] = tango;
    golf['messageContent'] = yankee;
    golf = verify.bind(offset)(golf);
    var _closure1_slot9 = golf;
    golf = options.memo;
    mike = function(argFoo) { // Original name: MessageRequestPreview
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            kilo = entity.channel;
            var _closure2_slot0 = kilo;
            oscar = entity.style;
            entity = _closure1_slot9;
            tango = undefined;
            entity = entity.bind(tango)();
            options = _closure1_slot0;
            verify = _closure1_slot2;
            mike = 8;
            mike = verify[mike];
            golf = options.bind(tango)(mike);
            mike = golf.useMessageRequestPreview;
            golf = mike.bind(golf)(kilo);
            yankee = golf.loaded;
            mike = golf.error;
            romeo = golf.message;
            var _closure2_slot1 = romeo;
            golf = 9;
            golf = verify[golf];
            offset = options.bind(tango)(golf);
            golf = offset.useShouldFilterKeywords;
            foxtrot = golf.bind(offset)();
            golf = 10;
            golf = verify[golf];
            backup = options.bind(tango)(golf);
            offset = backup.useStateFromStoresObject;
            golf = _closure1_slot5;
            verify = new Array(1);
            verify[0] = golf;
            options = new Array(1);
            options[0] = romeo;
            golf = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    entity = {};
                    mike = _closure2_slot1;
                    tango = null;
                    mike = tango != mike;
                    if(!mike) { _fun00004_ip = 40; continue _fun00003 }
 18:
                    golf = _closure1_slot5;
                    oscar = golf.isBlockedForMessage;
                    report = _closure2_slot1;
                    mike = oscar.bind(golf)(report);
 40:
                    entity['isBlocked'] = mike;
                    mike = _closure2_slot1;
                    mike = tango != mike;
                    if(!mike) { _fun00004_ip = 78; continue _fun00003 }
 56:
                    report = _closure1_slot5;
                    tango = report.isIgnoredForMessage;
                    zulu = _closure2_slot1;
                    mike = tango.bind(report)(zulu);
 78:
                    entity['isIgnored'] = mike;
                    return entity;
                }
            };
            golf = offset.bind(backup)(verify, golf, options);
            offset = golf.isBlocked;
            verify = golf.isIgnored;
            backup = _closure1_slot3;
            options = backup.useEffect;
            golf = new Array(2);
            golf[0] = kilo;
            golf[1] = romeo;
            zulu = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = null;
                    if(!(entity != mike)) { _fun00006_ip = 105; continue _fun00005 }
 13:
                    tango = _closure1_slot1;
                    zulu = _closure1_slot2;
                    mike = 11;
                    zulu = zulu[mike];
                    mike = undefined;
                    tango = tango.bind(mike)(zulu);
                    zulu = tango.track;
                    entity = _closure1_slot6;
                    mike = entity.MESSAGE_REQUEST_PREVIEW_VIEWED;
                    entity = {};
                    oscar = _closure2_slot0;
                    golf = oscar.isSpam;
                    entity['is_spam'] = golf;
                    oscar = oscar.id;
                    entity['channel_id'] = oscar;
                    report = _closure2_slot1;
                    report = report.author;
                    report = report.id;
                    entity['other_user_id'] = report;
                    entity = zulu.bind(tango)(mike, entity);
 105:
                    entity = undefined;
                    return entity;
                }
            };
            zulu = options.bind(backup)(zulu, golf);
            if(mike) { _fun00002_ip = 884; continue _fun00001 }
 209:
            zulu = null;
            mike = false;
            golf = null;
            if(!yankee) { _fun00002_ip = 941; continue _fun00001 }
 221:
            if(!(zulu != romeo)) { _fun00002_ip = 231; continue _fun00001 }
 225:
            if(offset) { _fun00002_ip = 825; continue _fun00001 }
 231:
            if(!(zulu != romeo)) { _fun00002_ip = 241; continue _fun00001 }
 235:
            if(verify) { _fun00002_ip = 766; continue _fun00001 }
 241:
            offset = zulu == romeo;
            verify = undefined;
            if(offset) { _fun00002_ip = 255; continue _fun00001 }
 250:
            verify = romeo.content;
 255:
            if(!(zulu != verify)) { _fun00002_ip = 275; continue _fun00001 }
 259:
            offset = romeo.content;
            verify = '';
            if(!(verify === offset)) { _fun00002_ip = 612; continue _fun00001 }
 275:
            if(!(zulu == romeo)) { _fun00002_ip = 341; continue _fun00001 }
 279:
            backup = _closure1_slot0;
            kilo = _closure1_slot2;
            verify = 12;
            offset = kilo[verify];
            offset = backup.bind(tango)(offset);
            yankee = offset.intl;
            offset = yankee.string;
            verify = kilo[verify];
            verify = backup.bind(tango)(verify);
            verify = verify.t;
            verify = verify.0KfDxM;
            golf = offset.bind(yankee)(verify);
            mike = false;
            _fun00002_ip = 941; continue _fun00001;
 341:
            offset = _closure1_slot0;
            yankee = _closure1_slot2;
            verify = 14;
            verify = yankee[verify];
            offset = offset.bind(tango)(verify);
            verify = offset.getMessageStickers;
            verify = verify.bind(offset)(romeo);
            offset = verify.length;
            verify = 0;
            if(!(!(offset > verify))) { _fun00002_ip = 547; continue _fun00001 }
 386:
            verify = romeo.interaction;
            if(!(zulu == verify)) { _fun00002_ip = 490; continue _fun00001 }
 396:
            offset = romeo.hasFlag;
            verify = _closure1_slot7;
            verify = verify.IS_VOICE_MESSAGE;
            verify = offset.bind(romeo)(verify);
            kilo = _closure1_slot0;
            sizing = _closure1_slot2;
            offset = 12;
            yankee = sizing[offset];
            yankee = kilo.bind(tango)(yankee);
            backup = yankee.intl;
            yankee = backup.string;
            offset = sizing[offset];
            offset = kilo.bind(tango)(offset);
            offset = offset.t;
            if(verify) { _fun00002_ip = 477; continue _fun00001 }
 464:
            verify = offset.LoMGlp;
            verify = yankee.bind(backup)(verify);
            _fun00002_ip = 488; continue _fun00001;
 477:
            offset = offset.XC3A5+;
            verify = yankee.bind(backup)(offset);
 488:
            _fun00002_ip = 545; continue _fun00001;
 490:
            kilo = _closure1_slot0;
            sizing = _closure1_slot2;
            offset = 12;
            yankee = sizing[offset];
            yankee = kilo.bind(tango)(yankee);
            backup = yankee.intl;
            yankee = backup.string;
            offset = sizing[offset];
            offset = kilo.bind(tango)(offset);
            offset = offset.t;
            offset = offset.E+6SSU;
            verify = yankee.bind(backup)(offset);
 545:
            _fun00002_ip = 602; continue _fun00001;
 547:
            kilo = _closure1_slot0;
            sizing = _closure1_slot2;
            offset = 12;
            yankee = sizing[offset];
            yankee = kilo.bind(tango)(yankee);
            backup = yankee.intl;
            yankee = backup.string;
            offset = sizing[offset];
            offset = kilo.bind(tango)(offset);
            offset = offset.t;
            offset = offset.zuI+b2;
            verify = yankee.bind(backup)(offset);
 602:
            golf = verify;
            mike = false;
            _fun00002_ip = 941; continue _fun00001;
 612:
            offset = _closure1_slot1;
            yankee = _closure1_slot2;
            verify = 13;
            verify = yankee[verify];
            yankee = offset.bind(tango)(verify);
            verify = {};
            offset = true;
            verify['noStyleAndInteraction'] = offset;
            verify['shouldFilterKeywords'] = foxtrot;
            verify = yankee.bind(tango)(romeo, verify);
            verify = verify.content;
            yankee = global;
            romeo = yankee.Array;
            yankee = romeo.isArray;
            yankee = yankee.bind(romeo)(verify);
            if(!yankee) { _fun00002_ip = 689; continue _fun00001 }
 678:
            romeo = verify.length;
            yankee = 0;
            if(!(yankee !== romeo)) { _fun00002_ip = 704; continue _fun00001 }
 689:
            zulu = zulu == verify;
            mike = true;
            golf = verify;
            if(!zulu) { _fun00002_ip = 941; continue _fun00001 }
 704:
            yankee = _closure1_slot0;
            romeo = _closure1_slot2;
            zulu = 12;
            verify = romeo[zulu];
            verify = yankee.bind(tango)(verify);
            offset = verify.intl;
            verify = offset.string;
            zulu = romeo[zulu];
            zulu = yankee.bind(tango)(zulu);
            zulu = zulu.t;
            zulu = zulu.262oPD;
            golf = verify.bind(offset)(zulu);
            mike = false;
            _fun00002_ip = 941; continue _fun00001;
 766:
            yankee = _closure1_slot0;
            romeo = _closure1_slot2;
            zulu = 12;
            verify = romeo[zulu];
            verify = yankee.bind(tango)(verify);
            offset = verify.intl;
            verify = offset.string;
            zulu = romeo[zulu];
            zulu = yankee.bind(tango)(zulu);
            zulu = zulu.t;
            zulu = zulu.uxrh1N;
            golf = verify.bind(offset)(zulu);
            mike = false;
            _fun00002_ip = 941; continue _fun00001;
 825:
            yankee = _closure1_slot0;
            romeo = _closure1_slot2;
            zulu = 12;
            verify = romeo[zulu];
            verify = yankee.bind(tango)(verify);
            offset = verify.intl;
            verify = offset.string;
            zulu = romeo[zulu];
            zulu = yankee.bind(tango)(zulu);
            zulu = zulu.t;
            zulu = zulu.WPe+xM;
            golf = verify.bind(offset)(zulu);
            mike = false;
            _fun00002_ip = 941; continue _fun00001;
 884:
            offset = _closure1_slot0;
            yankee = _closure1_slot2;
            zulu = 12;
            options = yankee[zulu];
            options = offset.bind(tango)(options);
            verify = options.intl;
            options = verify.string;
            zulu = yankee[zulu];
            zulu = offset.bind(tango)(zulu);
            zulu = zulu.t;
            zulu = zulu.BZHld3;
            golf = options.bind(verify)(zulu);
            mike = false;
 941:
            if(mike) { _fun00002_ip = 952; continue _fun00001 }
 944:
            options = entity.systemContent;
            _fun00002_ip = 958; continue _fun00001;
 952:
            options = entity.messageContent;
 958:
            zulu = _closure1_slot8;
            mike = _closure1_slot4;
            entity = {};
            entity['style'] = oscar;
            oscar = _closure1_slot0;
            verify = _closure1_slot2;
            report = 15;
            report = verify[report];
            report = oscar.bind(tango)(report);
            oscar = report.LegacyText;
            report = {'style': null, 'numberOfLines': 3, 'ellipsizeMode': 'tail'};
            report['style'] = options;
            report['children'] = golf;
            report = zulu.bind(tango)(oscar, report);
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    mike = golf.bind(options)(mike);
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/message_request/native/MessageRequestPreview.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();