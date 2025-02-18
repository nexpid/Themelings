// app/modules/messages/LegacyCommands.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    oscard = argBar;
    offset = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = offset;
    var _closure1_slot2 = golfie;
    entity = function(argFoo, argBar, argBaz, argCor) { // Original name: executeCommand
        tangon = argBar;
        report = _closure1_slot1;
        zuuluu = _closure1_slot2;
        michal = 10;
        zuuluu = zuuluu[michal];
        michal = undefined;
        report = report.bind(michal)(zuuluu);
        zuuluu = report.trackWithMetadata;
        entity = _closure1_slot6;
        michal = entity.SLASH_COMMAND_USED;
        entity = {};
        oscard = argFoo;
        entity['command'] = oscard;
        entity = zuuluu.bind(report)(michal, entity);
        zuuluu = tangon.action;
        michal = argBaz;
        entity = argCor;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    var _closure1_slot11 = entity;
    report = global;
    verify = report.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = golfie[entity];
    entity = undefined;
    tangon = offset.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = golfie[tangon];
    tangon = offset.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = golfie[tangon];
    tangon = offset.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = golfie[tangon];
    tangon = oscard.bind(entity)(tangon);
    option = tangon.AnalyticEvents;
    var _closure1_slot6 = option;
    option = tangon.MARKDOWN_SPOILER_WRAPPER;
    var _closure1_slot7 = option;
    tangon = tangon.ME;
    var _closure1_slot8 = tangon;
    tangon = /\\([*?+\/])/g;
    var _closure1_slot9 = tangon;
    tangon = {};
    option = {};
    verify = function() { // Original name: action
        entity = {};
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot2;
        michal = 4;
        zuuluu = zuuluu[michal];
        michal = undefined;
        michal = tangon.bind(michal)(zuuluu);
        zuuluu = michal.EnableTTSCommand;
        michal = zuuluu.getSetting;
        michal = michal.bind(zuuluu)();
        entity['tts'] = michal;
        return entity;
    };
    option['action'] = verify;
    tangon['tts'] = option;
    option = {};
    verify = function(argFoo) { // Original name: action
        entity = {};
        michal = global;
        michal = michal.HermesInternal;
        tangon = michal.concat;
        zuuluu = '_';
        michal = argFoo;
        michal = tangon.bind(zuuluu)(michal, zuuluu);
        entity['content'] = michal;
        return entity;
    };
    option['action'] = verify;
    tangon['me'] = option;
    option = {};
    verify = function(argFoo) { // Original name: action
        entity = {};
        michal = global;
        michal = michal.HermesInternal;
        report = michal.concat;
        tangon = '';
        zuuluu = argFoo;
        michal = ' (╯°□°)╯︵ ┻━┻';
        zuuluu = report.bind(tangon)(zuuluu, michal);
        michal = zuuluu.trim;
        michal = michal.bind(zuuluu)();
        entity['content'] = michal;
        return entity;
    };
    option['action'] = verify;
    tangon['tableflip'] = option;
    option = {};
    verify = function(argFoo) { // Original name: action
        entity = {};
        michal = global;
        michal = michal.HermesInternal;
        report = michal.concat;
        tangon = '';
        zuuluu = argFoo;
        michal = ' ┬─┬ノ( º _ ºノ)';
        zuuluu = report.bind(tangon)(zuuluu, michal);
        michal = zuuluu.trim;
        michal = michal.bind(zuuluu)();
        entity['content'] = michal;
        return entity;
    };
    option['action'] = verify;
    tangon['unflip'] = option;
    option = {};
    verify = function(argFoo) { // Original name: action
        entity = {};
        michal = global;
        michal = michal.HermesInternal;
        report = michal.concat;
        tangon = '';
        zuuluu = argFoo;
        michal = ' ¯\\_(ツ)_/¯';
        zuuluu = report.bind(tangon)(zuuluu, michal);
        michal = zuuluu.trim;
        michal = michal.bind(zuuluu)();
        entity['content'] = michal;
        return entity;
    };
    option['action'] = verify;
    tangon['shrug'] = option;
    option = {};
    verify = function(argFoo, argBar) { // Original name: action
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argBar;
            michal = entity.channel;
            zuuluu = michal.guild_id;
            entity = null;
            if(!(entity == zuuluu)) { _fun00002_ip = 23; continue _fun00001 }
 19:
            entity = undefined;
            return entity;
 23:
            report = _closure1_slot1;
            tangon = _closure1_slot2;
            zuuluu = 5;
            tangon = tangon[zuuluu];
            zuuluu = undefined;
            oscard = report.bind(zuuluu)(tangon);
            report = oscard.changeNickname;
            offset = michal.guild_id;
            verify = michal.id;
            option = _closure1_slot8;
            golfie = argFoo;
            yankee = oscard;
            entity = yankee[report](offset, verify, option, golfie, oscard);
            entity = {};
            michal = '';
            entity['content'] = michal;
            return entity;
        }
    };
    option['action'] = verify;
    tangon['nick'] = option;
    option = {};
    verify = 6;
    yankee = golfie[verify];
    foxtra = offset.bind(entity)(yankee);
    romeon = foxtra.anyScopeRegex;
    yankee = /^\+:(.+?): *$/;
    yankee = romeon.bind(foxtra)(yankee);
    option['match'] = yankee;
    yankee = function(argFoo, argBar) { // Original name: action
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            option = argFoo;
            michal = argBar;
            entity = michal.isEdit;
            michal = michal.channel;
            if(entity) { _fun00004_ip = 248; continue _fun00003 }
 23:
            report = _closure1_slot5;
            tangon = report.hasPresent;
            entity = michal.id;
            entity = tangon.bind(report)(entity);
            if(!entity) { _fun00004_ip = 248; continue _fun00003 }
 52:
            report = _closure1_slot5;
            tangon = report.getMessages;
            entity = michal.id;
            tangon = tangon.bind(report)(entity);
            entity = tangon.last;
            entity = entity.bind(tangon)();
            tangon = null;
            if(!(tangon != entity)) { _fun00004_ip = 248; continue _fun00003 }
 91:
            report = entity.id;
            if(!(tangon != report)) { _fun00004_ip = 248; continue _fun00003 }
 103:
            golfie = _closure1_slot4;
            oscard = golfie.getDisambiguatedEmojiContext;
            report = michal.guild_id;
            golfie = oscard.bind(golfie)(report);
            oscard = golfie.getByName;
            report = option.trim;
            offset = report.bind(option)();
            verify = offset.slice;
            option = 2;
            report = -1;
            report = verify.bind(offset)(option, report);
            golfie = oscard.bind(golfie)(report);
            if(!(tangon != golfie)) { _fun00004_ip = 248; continue _fun00003 }
 168:
            option = _closure1_slot0;
            verify = _closure1_slot2;
            zuuluu = 7;
            zuuluu = verify[zuuluu];
            oscard = undefined;
            report = option.bind(oscard)(zuuluu);
            tangon = report.addReaction;
            zuuluu = michal.id;
            michal = entity.id;
            entity = 8;
            entity = verify[entity];
            oscard = option.bind(oscard)(entity);
            entity = oscard.toReactionEmoji;
            entity = entity.bind(oscard)(golfie);
            entity = tangon.bind(report)(zuuluu, michal, entity);
            entity = {};
            michal = '';
            entity['content'] = michal;
            return entity;
 248:
            entity = undefined;
            return entity;
        }
    };
    option['action'] = yankee;
    tangon['reaction'] = option;
    option = {};
    verify = golfie[verify];
    yankee = offset.bind(entity)(verify);
    offset = yankee.anyScopeRegex;
    verify = /^s\\/((?:.+?)[^\\]|.)\\/(.*)/;
    verify = offset.bind(yankee)(verify);
    option['match'] = verify;
    verify = function(argFoo, argBar) { // Original name: action
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            golfie = argFoo;
            michal = argBar;
            entity = michal.isEdit;
            michal = michal.channel;
            if(entity) { _fun00006_ip = 426; continue _fun00005 }
 25:
            report = _closure1_slot5;
            tangon = report.getLastEditableMessage;
            entity = michal.id;
            entity = tangon.bind(report)(entity);
            tangon = null;
            if(!(tangon != entity)) { _fun00006_ip = 414; continue _fun00005 }
 59:
            report = entity.id;
            if(!(tangon != report)) { _fun00006_ip = 414; continue _fun00005 }
 71:
            report = global;
            verify = report.Array;
            option = verify.from;
            offset = golfie.match;
            report = this;
            report = report.match;
            report = report.regex;
            report = offset.bind(golfie)(report);
            if(!(tangon == report)) { _fun00006_ip = 118; continue _fun00005 }
 114:
            report = new Array(0);
 118:
            offset = option.bind(verify)(report);
            verify = _closure1_slot3;
            report = undefined;
            option = 3;
            verify = verify.bind(report)(offset, option);
            option = 1;
            romeon = verify[option];
            option = 2;
            offset = verify[option];
            yankee = romeon.replace;
            verify = _closure1_slot9;
            option = function(argFoo, argBar) {
                entity = argBar;
                return entity;
            };
            yankee = yankee.bind(romeon)(verify, option);
            option = offset.replace;
            oscard = function(argFoo, argBar) {
                entity = argBar;
                return entity;
            };
            foxtra = option.bind(offset)(verify, oscard);
            option = foxtra.endsWith;
            oscard = '/g';
            option = option.bind(foxtra)(oscard);
            offset = foxtra;
            oscard = false;
            if(!option) { _fun00006_ip = 238; continue _fun00005 }
 217:
            romeon = foxtra.slice;
            verify = 0;
            option = -2;
            offset = romeon.bind(foxtra)(verify, option);
            oscard = true;
 238:
            verify = entity.content;
            if(oscard) { _fun00006_ip = 259; continue _fun00005 }
 246:
            oscard = verify.replace;
            oscard = oscard.bind(verify)(yankee, offset);
            _fun00006_ip = 271; continue _fun00005;
 259:
            option = verify.replaceAll;
            oscard = option.bind(verify)(yankee, offset);
 271:
            if(!(tangon != oscard)) { _fun00006_ip = 283; continue _fun00005 }
 275:
            tangon = '';
            if(!(tangon === oscard)) { _fun00006_ip = 344; continue _fun00005 }
 283:
            tangon = entity.attachments;
            option = tangon.length;
            tangon = 0;
            if(!(tangon === option)) { _fun00006_ip = 344; continue _fun00005 }
 300:
            option = _closure1_slot1;
            verify = _closure1_slot2;
            tangon = 9;
            tangon = verify[tangon];
            offset = option.bind(report)(tangon);
            verify = offset.deleteMessage;
            option = michal.id;
            tangon = entity.id;
            tangon = verify.bind(offset)(option, tangon);
            _fun00006_ip = 402; continue _fun00005;
 344:
            tangon = entity.content;
            if(!(golfie !== tangon)) { _fun00006_ip = 402; continue _fun00005 }
 353:
            tangon = _closure1_slot1;
            golfie = _closure1_slot2;
            zuuluu = 9;
            zuuluu = golfie[zuuluu];
            report = tangon.bind(report)(zuuluu);
            tangon = report.editMessage;
            zuuluu = michal.id;
            michal = entity.id;
            entity = {};
            entity['content'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal, entity);
 402:
            entity = {};
            michal = '';
            entity['content'] = michal;
            return entity;
 414:
            entity = {};
            michal = '';
            entity['content'] = michal;
            return entity;
 426:
            entity = undefined;
            return entity;
        }
    };
    option['action'] = verify;
    tangon['searchReplace'] = option;
    option = {};
    verify = function(argFoo) { // Original name: action
        entity = {};
        tangon = _closure1_slot7;
        zuuluu = undefined;
        michal = argFoo;
        zuuluu = tangon.bind(zuuluu)(michal);
        michal = zuuluu.trim;
        michal = michal.bind(zuuluu)();
        entity['content'] = michal;
        return entity;
    };
    option['action'] = verify;
    tangon['spoiler'] = option;
    var _closure1_slot10 = tangon;
    verify = report.Object;
    option = verify.setPrototypeOf;
    report = null;
    report = option.bind(verify)(tangon, report);
    report = 11;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/messages/LegacyCommands.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['COMMANDS'] = tangon;
    michal = function(argFoo, argBar) { // Original name: handleLegacyCommands
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            oscard = argFoo;
            romeon = _closure1_slot10;
            entity = undefined;
            option = null;
            golfie = undefined;
            for(verify in romeon)
 24:
            {
 33:
                report = verify;
                zuuluu = _closure1_slot10;
                tangon = zuuluu[report];
                zuuluu = tangon.match;
                if(option == zuuluu) { _fun00008_ip = 24; continue _fun00007 }
 54:
                zuuluu = tangon.match;
                backup = zuuluu.regex;
                golfie = backup;
                if(option == golfie) { _fun00008_ip = 24; continue _fun00007 }
 73:
                zuuluu = backup.test;
                zuuluu = zuuluu.bind(backup)(oscard);
                golfie = backup;
                if(!zuuluu) { _fun00008_ip = 24; continue _fun00007 }
 89:
                zuuluu = _closure1_slot11;
                kiloes = argBar;
                echoed = undefined;
                result = report;
                output = tangon;
                sizing = oscard;
                michal = echoed[zuuluu](result, output, sizing, kiloes, backup);
                return michal;
            }
 113:
            return entity;
        }
    };
    zuuluu['handleLegacyCommands'] = michal;
    return entity;
})();