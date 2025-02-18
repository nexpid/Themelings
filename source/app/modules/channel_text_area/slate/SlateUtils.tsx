// app/modules/channel_text_area/slate/SlateUtils.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    zuuluu = argFre;
    tangon = function(argFoo) { // Original name: toRichValue
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            entity = '';
            if(!(entity === tangon)) { _fun00002_ip = 20; continue _fun00001 }
 11:
            entity = _closure1_slot0;
            _fun00002_ip = 51; continue _fun00001;
 20:
            zuuluu = tangon.split;
            michal = '\n';
            tangon = zuuluu.bind(tangon)(michal);
            zuuluu = tangon.map;
            michal = function(argFoo) {
                entity = {};
                michal = 'line';
                entity['type'] = michal;
                zuuluu = {};
                michal = argFoo;
                zuuluu['text'] = michal;
                michal = new Array(1);
                michal[0] = zuuluu;
                entity['children'] = michal;
                return entity;
            };
            entity = zuuluu.bind(tangon)(michal);
 51:
            return entity;
        }
    };
    var _closure1_slot1 = tangon;
    verify = global;
    golfie = verify.Object;
    oscard = golfie.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = oscard.bind(golfie)(zuuluu, entity, report);
    oscard = verify.Object;
    report = oscard.freeze;
    option = verify.Object;
    golfie = option.freeze;
    entity = {};
    offset = 'line';
    entity['type'] = offset;
    yankee = verify.Object;
    offset = yankee.freeze;
    foxtra = verify.Object;
    romeon = foxtra.freeze;
    verify = {};
    backup = '';
    verify['text'] = backup;
    romeon = romeon.bind(foxtra)(verify);
    verify = new Array(1);
    verify[0] = romeon;
    verify = offset.bind(yankee)(verify);
    entity['children'] = verify;
    golfie = golfie.bind(option)(entity);
    entity = new Array(1);
    entity[0] = golfie;
    entity = report.bind(oscard)(entity);
    var _closure1_slot0 = entity;
    report = argPlu;
    entity = 0;
    oscard = report[entity];
    report = argBar;
    entity = undefined;
    golfie = report.bind(entity)(oscard);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/channel_text_area/slate/SlateUtils.tsx';
    report = oscard.bind(golfie)(report);
    report = function() { // Original name: createEmptyState
        entity = {};
        michal = '';
        entity['textValue'] = michal;
        zuuluu = {};
        tangon = 'line';
        zuuluu['type'] = tangon;
        tangon = {};
        tangon['text'] = michal;
        michal = new Array(1);
        michal[0] = tangon;
        zuuluu['children'] = michal;
        michal = new Array(1);
        michal[0] = zuuluu;
        entity['richValue'] = michal;
        return entity;
    };
    zuuluu['createEmptyState'] = report;
    report = function(argFoo) { // Original name: createState
        tangon = argFoo;
        entity = {};
        entity['textValue'] = tangon;
        zuuluu = _closure1_slot1;
        michal = undefined;
        michal = zuuluu.bind(michal)(tangon);
        entity['richValue'] = michal;
        return entity;
    };
    zuuluu['createState'] = report;
    zuuluu['toRichValue'] = tangon;
    michal = function(argFoo) { // Original name: voidToOptionValue
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            michal = argFoo;
            offset = michal.type;
            zuuluu = 'userMention';
            if(!(zuuluu !== offset)) { _fun00004_ip = 311; continue _fun00003 }
 21:
            tangon = 'channelMention';
            if(!(tangon !== offset)) { _fun00004_ip = 294; continue _fun00003 }
 32:
            report = 'soundboard';
            if(!(report !== offset)) { _fun00004_ip = 266; continue _fun00003 }
 43:
            oscard = 'roleMention';
            if(!(oscard !== offset)) { _fun00004_ip = 247; continue _fun00003 }
 54:
            golfie = 'textMention';
            if(!(golfie !== offset)) { _fun00004_ip = 230; continue _fun00003 }
 67:
            option = 'emoji';
            if(!(option !== offset)) { _fun00004_ip = 190; continue _fun00003 }
 75:
            verify = 'customEmoji';
            if(!(verify !== offset)) { _fun00004_ip = 133; continue _fun00003 }
 83:
            entity = 'testInlineVoid';
            if(!(entity !== offset)) { _fun00004_ip = 97; continue _fun00003 }
 93:
            entity = null;
            return entity;
 97:
            entity = global;
            yankee = entity.Error;
            entity = yankee.prototype;
            offset = Object.create(entity, {constructor: {value: yankee}});
            romeon = 'Unable to convert test types';
            foxtra = offset;
            entity = new foxtra[yankee](romeon, yankee);
            entity = entity instanceof Object ? entity : offset;
            throw entity;
 133:
            entity = {};
            entity['type'] = verify;
            verify = michal.emoji;
            verify = verify.emojiId;
            entity['emojiId'] = verify;
            verify = michal.emoji;
            verify = verify.name;
            entity['name'] = verify;
            verify = michal.emoji;
            verify = verify.animated;
            entity['animated'] = verify;
            return entity;
 190:
            entity = {};
            entity['type'] = option;
            option = michal.emoji;
            option = option.name;
            entity['name'] = option;
            option = michal.emoji;
            option = option.surrogate;
            entity['surrogate'] = option;
            return entity;
 230:
            entity = {};
            entity['type'] = golfie;
            golfie = michal.name;
            entity['text'] = golfie;
            return entity;
 247:
            entity = {};
            entity['type'] = oscard;
            oscard = michal.roleId;
            entity['roleId'] = oscard;
            return entity;
 266:
            entity = {};
            entity['type'] = report;
            report = michal.guildId;
            entity['guildId'] = report;
            report = michal.soundId;
            entity['soundId'] = report;
            return entity;
 294:
            entity = {};
            entity['type'] = tangon;
            tangon = michal.channelId;
            entity['channelId'] = tangon;
            return entity;
 311:
            entity = {};
            entity['type'] = zuuluu;
            michal = michal.userId;
            entity['userId'] = michal;
            return entity;
        }
    };
    zuuluu['voidToOptionValue'] = michal;
    return entity;
})();