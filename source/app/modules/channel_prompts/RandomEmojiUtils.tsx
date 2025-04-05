// app/modules/channel_prompts/RandomEmojiUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function(argFoo) { // Original name: isGuildSafe
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = _closure1_slot6;
            michal = tangon.getGuild;
            entity = argFoo;
            tangon = michal.bind(tangon)(entity);
            entity = null;
            entity = entity != tangon;
            if(!entity) { _fun00002_ip = 75; continue _fun00001 }
 29:
            report = tangon.nsfwLevel;
            michal = _closure1_slot8;
            michal = michal.DEFAULT;
            michal = report === michal;
            if(michal) { _fun00002_ip = 72; continue _fun00001 }
 52:
            tangon = tangon.nsfwLevel;
            zuuluu = _closure1_slot8;
            zuuluu = zuuluu.SAFE;
            michal = tangon === zuuluu;
 72:
            entity = michal;
 75:
            return entity;
        }
    };
    var _closure1_slot10 = entity;
    entity = function() { // Original name: _sendRandomStickerOrEmoji
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo, argBar) {
            entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    StartGenerator();
                    offset = argFoo;
                    yankee = argBar;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00004_ip = 917; continue _fun00003 }
 18:
                    var _closure4_slot0 = yankee;
                    zuuluu = undefined;
                    var _closure4_slot1 = zuuluu;
                    var _closure4_slot2 = zuuluu;
                    michal = yankee.getGuildId;
                    oscard = michal.bind(yankee)();
                    _closure4_slot1 = oscard;
                    romeon = null;
                    if(!(romeon != oscard)) { _fun00004_ip = 911; continue _fun00003 }
 55:
                    report = _closure1_slot6;
                    michal = report.getGuild;
                    michal = michal.bind(report)(oscard);
                    if(!(romeon != michal)) { _fun00004_ip = 911; continue _fun00003 }
 79:
                    report = _closure1_slot7;
                    michal = report.getCurrentUser;
                    michal = michal.bind(report)();
                    _closure4_slot2 = michal;
                    if(!(romeon != michal)) { _fun00004_ip = 911; continue _fun00003 }
 103:
                    report = _closure1_slot0;
                    oscard = _closure1_slot2;
                    michal = 7;
                    michal = oscard[michal];
                    report = report.bind(zuuluu)(michal);
                    michal = report.fetchStickerPacks;
                    michal = michal.bind(report)();
                    SaveGenerator(address=137);
 135:
                    return michal;
 137:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(report) { _fun00004_ip = 914; continue _fun00003 }
 146:
                    report = global;
                    verify = report.Array;
                    option = verify.from;
                    foxtra = _closure1_slot5;
                    oscard = foxtra.getAllStickersIterator;
                    oscard = oscard.bind(foxtra)();
                    foxtra = option.bind(verify)(oscard);
                    option = foxtra.filter;
                    oscard = function(argFoo) {
                        entity = argFoo;
                        michal = entity.type;
                        tangon = _closure1_slot0;
                        zuuluu = _closure1_slot2;
                        entity = 8;
                        zuuluu = zuuluu[entity];
                        entity = undefined;
                        entity = tangon.bind(entity)(zuuluu);
                        entity = entity.MetaStickerType;
                        entity = entity.GUILD;
                        entity = michal === entity;
                        return entity;
                    };
                    verify = option.bind(foxtra)(oscard);
                    option = verify.filter;
                    oscard = function(argFoo) {
                        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                            oscard = argFoo;
                            zuuluu = _closure1_slot10;
                            entity = oscard.guild_id;
                            tangon = undefined;
                            entity = zuuluu.bind(tangon)(entity);
                            if(!entity) { _fun00006_ip = 69; continue _fun00005 }
 25:
                            zuuluu = _closure1_slot0;
                            report = _closure1_slot2;
                            michal = 9;
                            michal = report[michal];
                            report = zuuluu.bind(tangon)(michal);
                            tangon = report.isSendableSticker;
                            zuuluu = _closure4_slot2;
                            michal = _closure4_slot0;
                            entity = tangon.bind(report)(oscard, zuuluu, michal);
 69:
                            return entity;
                        }
                    };
                    verify = option.bind(verify)(oscard);
                    option = verify.sort;
                    oscard = function(argFoo, argBar) {
                        zuuluu = _closure1_slot1;
                        michal = _closure1_slot2;
                        entity = 10;
                        michal = michal[entity];
                        entity = undefined;
                        tangon = zuuluu.bind(entity)(michal);
                        zuuluu = tangon.compare;
                        entity = argFoo;
                        michal = entity.id;
                        entity = argBar;
                        entity = entity.id;
                        entity = zuuluu.bind(tangon)(michal, entity);
                        entity = -entity;
                        return entity;
                    };
                    oscard = option.bind(verify)(oscard);
                    verify = oscard.length;
                    option = 5;
                    if(!(!(verify > option))) { _fun00004_ip = 731; continue _fun00003 }
 245:
                    verify = _closure1_slot6;
                    option = verify.getGuildIds;
                    backup = option.bind(verify)();
                    verify = backup.filter;
                    option = _closure1_slot10;
                    backup = verify.bind(backup)(option);
                    verify = backup.map;
                    option = function(argFoo) {
                        zuuluu = _closure1_slot4;
                        michal = zuuluu.getUsableGuildEmoji;
                        entity = argFoo;
                        entity = michal.bind(zuuluu)(entity);
                        return entity;
                    };
                    verify = verify.bind(backup)(option);
                    option = verify.flat;
                    backup = option.bind(verify)();
                    verify = backup.filter;
                    option = function(argFoo) {
                        zuuluu = _closure1_slot1;
                        michal = _closure1_slot2;
                        entity = 12;
                        michal = michal[entity];
                        entity = undefined;
                        zuuluu = zuuluu.bind(entity)(michal);
                        michal = zuuluu.getEmojiUnavailableReason;
                        entity = {};
                        report = argFoo;
                        entity['emoji'] = report;
                        oscard = _closure4_slot0;
                        entity['channel'] = oscard;
                        report = _closure4_slot1;
                        entity['guildId'] = report;
                        tangon = _closure1_slot9;
                        tangon = tangon.CHAT;
                        entity['intention'] = tangon;
                        michal = michal.bind(zuuluu)(entity);
                        entity = null;
                        entity = entity == michal;
                        return entity;
                    };
                    backup = verify.bind(backup)(option);
                    verify = backup.sort;
                    option = function(argFoo, argBar) {
                        zuuluu = _closure1_slot1;
                        michal = _closure1_slot2;
                        entity = 10;
                        michal = michal[entity];
                        entity = undefined;
                        tangon = zuuluu.bind(entity)(michal);
                        zuuluu = tangon.compare;
                        entity = argFoo;
                        michal = entity.id;
                        entity = argBar;
                        entity = entity.id;
                        entity = zuuluu.bind(tangon)(michal, entity);
                        entity = -entity;
                        return entity;
                    };
                    option = verify.bind(backup)(option);
                    backup = option.length;
                    verify = 10;
                    if(!(!(backup > verify))) { _fun00004_ip = 531; continue _fun00003 }
 350:
                    verify = foxtra.filter;
                    golfie = function(argFoo) {
                        entity = argFoo;
                        michal = entity.type;
                        tangon = _closure1_slot0;
                        zuuluu = _closure1_slot2;
                        entity = 8;
                        zuuluu = zuuluu[entity];
                        entity = undefined;
                        entity = tangon.bind(entity)(zuuluu);
                        entity = entity.MetaStickerType;
                        entity = entity.STANDARD;
                        entity = michal === entity;
                        return entity;
                    };
                    verify = verify.bind(foxtra)(golfie);
                    backup = report.Math;
                    foxtra = backup.floor;
                    kiloes = report.Math;
                    golfie = kiloes.random;
                    kiloes = golfie.bind(kiloes)();
                    golfie = verify.length;
                    golfie = kiloes * golfie;
                    golfie = foxtra.bind(backup)(golfie);
                    golfie = verify[golfie];
                    golfie = golfie.id;
                    sizing = new Array(1);
                    sizing[0] = golfie;
                    verify = _closure1_slot1;
                    foxtra = _closure1_slot2;
                    golfie = 11;
                    golfie = foxtra[golfie];
                    kiloes = verify.bind(zuuluu)(golfie);
                    backup = kiloes.sendStickers;
                    foxtra = yankee.id;
                    verify = {};
                    golfie = {};
                    output = yankee.getGuildId;
                    result = output.bind(yankee)();
                    echoed = romeon != result;
                    output = undefined;
                    if(!echoed) { _fun00004_ip = 483; continue _fun00003 }
 480:
                    output = result;
 483:
                    golfie['guild_id'] = output;
                    output = yankee.id;
                    golfie['channel_id'] = output;
                    golfie['message_id'] = offset;
                    verify['messageReference'] = golfie;
                    source = '';
                    sequen = kiloes;
                    vacuum = foxtra;
                    ctrled = sizing;
                    update = verify;
                    golfie = sequen[backup](vacuum, ctrled, source, update, echoed);
                    _fun00004_ip = 911; continue _fun00003;
 531:
                    foxtra = report.Math;
                    verify = foxtra.floor;
                    sizing = report.Math;
                    kiloes = sizing.pow;
                    backup = report.Math;
                    golfie = backup.random;
                    backup = golfie.bind(backup)();
                    golfie = 2;
                    backup = kiloes.bind(sizing)(backup, golfie);
                    golfie = option.length;
                    golfie = backup * golfie;
                    golfie = verify.bind(foxtra)(golfie);
                    golfie = option[golfie];
                    verify = _closure1_slot1;
                    sizing = _closure1_slot2;
                    option = 11;
                    option = sizing[option];
                    kiloes = verify.bind(zuuluu)(option);
                    backup = kiloes.sendMessage;
                    foxtra = yankee.id;
                    option = 13;
                    option = sizing[option];
                    verify = verify.bind(zuuluu)(option);
                    option = verify.parse;
                    golfie = golfie.allNamesString;
                    verify = option.bind(verify)(yankee, golfie);
                    option = {};
                    golfie = {};
                    sizing = yankee.getGuildId;
                    output = sizing.bind(yankee)();
                    result = romeon != output;
                    sizing = undefined;
                    if(!result) { _fun00004_ip = 685; continue _fun00003 }
 682:
                    sizing = output;
 685:
                    golfie['guild_id'] = sizing;
                    sizing = yankee.id;
                    golfie['channel_id'] = sizing;
                    golfie['message_id'] = offset;
                    option['messageReference'] = golfie;
                    source = false;
                    sequen = kiloes;
                    vacuum = foxtra;
                    ctrled = verify;
                    update = option;
                    golfie = sequen[backup](vacuum, ctrled, source, update, echoed);
                    _fun00004_ip = 911; continue _fun00003;
 731:
                    option = report.Math;
                    golfie = option.floor;
                    backup = report.Math;
                    foxtra = backup.pow;
                    verify = report.Math;
                    report = verify.random;
                    verify = report.bind(verify)();
                    report = 2;
                    verify = foxtra.bind(backup)(verify, report);
                    report = oscard.length;
                    report = verify * report;
                    report = golfie.bind(option)(report);
                    report = oscard[report];
                    report = report.id;
                    verify = new Array(1);
                    verify[0] = report;
                    report = _closure1_slot1;
                    oscard = _closure1_slot2;
                    tangon = 11;
                    tangon = oscard[tangon];
                    option = report.bind(zuuluu)(tangon);
                    golfie = option.sendStickers;
                    oscard = yankee.id;
                    report = {};
                    tangon = {};
                    foxtra = yankee.getGuildId;
                    foxtra = foxtra.bind(yankee)();
                    backup = romeon != foxtra;
                    romeon = undefined;
                    if(!backup) { _fun00004_ip = 868; continue _fun00003 }
 865:
                    romeon = foxtra;
 868:
                    tangon['guild_id'] = romeon;
                    yankee = yankee.id;
                    tangon['channel_id'] = yankee;
                    tangon['message_id'] = offset;
                    report['messageReference'] = tangon;
                    source = '';
                    sequen = option;
                    vacuum = oscard;
                    ctrled = verify;
                    update = report;
                    tangon = sequen[golfie](vacuum, ctrled, source, update, echoed);
 911:
                    return zuuluu;
 914:
                    return michal;
 917:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot11 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot11 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.GuildNSFWContentLevel;
    var _closure1_slot8 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.EmojiIntention;
    var _closure1_slot9 = tangon;
    tangon = 14;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/channel_prompts/RandomEmojiUtils.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function() { // Original name: sendRandomStickerOrEmoji
        entity = undefined;
        tangon = _closure1_slot11;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['sendRandomStickerOrEmoji'] = michal;
    return entity;
})();