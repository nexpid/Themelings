// app/modules/soundboard/canChannelUseSoundboard.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    option = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    tangon = function(argFoo) { // Original name: canChannelUseSoundboard
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            entity = null;
            if(!(entity != tangon)) { _fun00002_ip = 129; continue _fun00001 }
 9:
            michal = _closure1_slot4;
            report = michal.CALLABLE;
            zuuluu = report.has;
            michal = tangon.type;
            michal = zuuluu.bind(report)(michal);
            if(michal) { _fun00002_ip = 125; continue _fun00001 }
 40:
            report = _closure1_slot1;
            zuuluu = report.can;
            michal = _closure1_slot5;
            michal = michal.USE_SOUNDBOARD;
            zuuluu = zuuluu.bind(report)(michal, tangon);
            oscard = _closure1_slot1;
            report = oscard.can;
            michal = _closure1_slot5;
            michal = michal.SPEAK;
            michal = report.bind(oscard)(michal, tangon);
            tangon = tangon.type;
            entity = _closure1_slot3;
            entity = entity.GUILD_VOICE;
            entity = tangon === entity;
            if(!entity) { _fun00002_ip = 117; continue _fun00001 }
 114:
            entity = zuuluu;
 117:
            if(!entity) { _fun00002_ip = 123; continue _fun00001 }
 120:
            entity = michal;
 123:
            return entity;
 125:
            entity = true;
            return entity;
 129:
            entity = false;
            return entity;
        }
    };
    var _closure1_slot6 = tangon;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, report);
    entity = 0;
    report = golfie[entity];
    entity = undefined;
    report = option.bind(entity)(report);
    var _closure1_slot0 = report;
    report = 1;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot1 = report;
    report = 2;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot2 = report;
    report = 3;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    option = report.ChannelTypes;
    var _closure1_slot3 = option;
    option = report.ChannelTypesSets;
    var _closure1_slot4 = option;
    report = report.Permissions;
    var _closure1_slot5 = report;
    report = 4;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/soundboard/canChannelUseSoundboard.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['default'] = tangon;
    michal = function() { // Original name: canSelectedVoiceChannelUseSoundboard
        zuuluu = _closure1_slot2;
        michal = zuuluu.getVoiceChannelId;
        tangon = michal.bind(zuuluu)();
        zuuluu = _closure1_slot6;
        michal = _closure1_slot0;
        entity = michal.getChannel;
        michal = entity.bind(michal)(tangon);
        entity = undefined;
        entity = zuuluu.bind(entity)(michal);
        return entity;
    };
    zuuluu['canSelectedVoiceChannelUseSoundboard'] = michal;
    return entity;
})();