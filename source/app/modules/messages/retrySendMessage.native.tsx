// app/modules/messages/retrySendMessage.native.tsx
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
    tango = 5;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/messages/retrySendMessage.native.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo, argBar, argBaz) { // Original name: retrySendMessage
        _fun90955: for(var _fun90955_ip = 0; ; ) switch(_fun90955_ip) {
 0:
            oscar = argFoo;
            report = argBar;
            options = argBaz;
            tango = arguments[3];
            entity = undefined;
            if(!(tango === entity)) { _fun90955_ip = 22; continue _fun90955 }
 20:
            tango = {};
 22:
            golf = _closure1_slot1;
            zulu = _closure1_slot2;
            foxtrot = 1;
            zulu = zulu[foxtrot];
            romeo = golf.bind(entity)(zulu);
            yankee = romeo.deleteMessage;
            offset = oscar.id;
            golf = report.id;
            zulu = true;
            zulu = yankee.bind(romeo)(offset, golf, zulu);
            zulu = report.isCommandType;
            zulu = zulu.bind(report)();
            if(zulu) { _fun90955_ip = 393; continue _fun90955 }
 86:
            kilo = report.content;
            backup = report.tts;
            echo = report.messageReference;
            romeo = report.flags;
            yankee = report.nonce;
            offset = null;
            if(!(offset == options)) { _fun90955_ip = 238; continue _fun90955 }
 120:
            golf = _closure1_slot1;
            zulu = _closure1_slot2;
            zulu = zulu[foxtrot];
            output = golf.bind(entity)(zulu);
            sizing = output.sendMessage;
            foxtrot = oscar.id;
            golf = {};
            golf['content'] = kilo;
            golf['tts'] = backup;
            zulu = new Array(0);
            golf['invalidEmojis'] = zulu;
            zulu = new Array(0);
            golf['validNonShortcutEmojis'] = zulu;
            zulu = {};
            zulu['nonce'] = yankee;
            zulu['flags'] = romeo;
            update = offset != echo;
            result = undefined;
            if(!update) { _fun90955_ip = 200; continue _fun90955 }
 197:
            result = echo;
 200:
            zulu['messageReference'] = result;
            sequence = zulu;
            vacuum = tango;
            result = copyDataProperties(sequence, vacuum);
            config = output;
            sequence = foxtrot;
            vacuum = golf;
            control = undefined;
            source = zulu;
            zulu = config[sizing](sequence, vacuum, control, source, update);
            _fun90955_ip = 453; continue _fun90955;
 238:
            golf = options.map;
            zulu = function(argFoo) {
                _fun90956: for(var _fun90956_ip = 0; ; ) switch(_fun90956_ip) {
 0:
                    tango = argFoo;
                    zulu = tango.on;
                    mike = null;
                    entity = tango;
                    if(!(mike == zulu)) { _fun90956_ip = 60; continue _fun90956 }
 18:
                    report = _closure1_slot0;
                    zulu = _closure1_slot2;
                    mike = 3;
                    zulu = zulu[mike];
                    mike = undefined;
                    mike = report.bind(mike)(zulu);
                    zulu = mike.CloudUpload;
                    mike = zulu.fromJson;
                    entity = mike.bind(zulu)(tango);
 60:
                    return entity;
                }
            };
            foxtrot = golf.bind(options)(zulu);
            golf = _closure1_slot1;
            options = _closure1_slot2;
            zulu = 4;
            zulu = options[zulu];
            options = golf.bind(entity)(zulu);
            golf = options.uploadLocalFiles;
            zulu = {};
            zulu['channel'] = oscar;
            zulu['items'] = foxtrot;
            sizing = _closure1_slot3;
            foxtrot = sizing.getToken;
            foxtrot = foxtrot.bind(sizing)();
            zulu['token'] = foxtrot;
            foxtrot = {};
            foxtrot['content'] = kilo;
            foxtrot['tts'] = backup;
            backup = new Array(0);
            foxtrot['invalidEmojis'] = backup;
            backup = new Array(0);
            foxtrot['validNonShortcutEmojis'] = backup;
            zulu['parsedMessage'] = foxtrot;
            zulu['flags'] = romeo;
            zulu['nonce'] = yankee;
            yankee = offset == tango;
            offset = undefined;
            if(yankee) { _fun90955_ip = 369; continue _fun90955 }
 363:
            offset = tango.poll;
 369:
            zulu['poll'] = offset;
            verify = function() { // Original name: maxSizeCallback
                entity = undefined;
                return entity;
            };
            zulu['maxSizeCallback'] = verify;
            zulu = golf.bind(options)(zulu);
            _fun90955_ip = 453; continue _fun90955;
 393:
            zulu = report.interactionData;
            options = null;
            zulu = options != zulu;
            if(!zulu) { _fun90955_ip = 417; continue _fun90955 }
 408:
            golf = tango.applicationId;
            zulu = options != golf;
 417:
            if(!zulu) { _fun90955_ip = 453; continue _fun90955 }
 420:
            zulu = _closure1_slot0;
            golf = _closure1_slot2;
            mike = 2;
            mike = golf[mike];
            zulu = zulu.bind(entity)(mike);
            mike = zulu.retryCommandMessage;
            mike = mike.bind(zulu)(report, oscar, tango);
 453:
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();