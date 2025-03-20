// app/modules/custom_status/setCustomStatus.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscard;
    entity = function(argFoo) { // Original name: determineEmojiType
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            zuuluu = null;
            tangon = zuuluu == michal;
            entity = null;
            if(tangon) { _fun00002_ip = 37; continue _fun00001 }
 14:
            michal = michal.id;
            zuuluu = zuuluu != michal;
            michal = 'unicode';
            if(!zuuluu) { _fun00002_ip = 34; continue _fun00001 }
 30:
            michal = 'custom';
 34:
            entity = michal;
 37:
            return entity;
        }
    };
    var _closure1_slot5 = entity;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = report.bind(entity)(tangon);
    tangon = tangon.ClearAfterValues;
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.AnalyticEvents;
    var _closure1_slot4 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/custom_status/setCustomStatus.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: setCustomStatus
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            michal = entity.text;
            backup = entity.emojiInfo;
            romeon = entity.clearAfter;
            sizing = entity.analyticsContext;
            report = entity.createdAtMs;
            golfie = entity.prompt;
            entity = michal.trim;
            verify = entity.bind(michal)();
            entity = verify.length;
            option = 0;
            if(!(!(entity > option))) { _fun00004_ip = 109; continue _fun00003 }
 59:
            entity = null;
            if(!(entity == backup)) { _fun00004_ip = 109; continue _fun00003 }
 65:
            michal = _closure1_slot0;
            zuuluu = _closure1_slot2;
            entity = 2;
            entity = zuuluu[entity];
            zuuluu = undefined;
            entity = michal.bind(zuuluu)(entity);
            michal = entity.CustomStatusSetting;
            entity = michal.updateSetting;
            entity = entity.bind(michal)(zuuluu);
            return entity;
 109:
            michal = _closure1_slot0;
            zuuluu = _closure1_slot2;
            entity = 2;
            entity = zuuluu[entity];
            oscard = undefined;
            entity = michal.bind(oscard)(entity);
            zuuluu = entity.CustomStatusSetting;
            michal = zuuluu.updateSetting;
            entity = {};
            tangon = verify.length;
            option = tangon > option;
            yankee = '';
            tangon = yankee;
            if(!option) { _fun00004_ip = 170; continue _fun00003 }
 167:
            tangon = verify;
 170:
            entity['text'] = tangon;
            option = null;
            offset = option != romeon;
            kiloes = '0';
            tangon = kiloes;
            if(!offset) { _fun00004_ip = 298; continue _fun00003 }
 192:
            offset = _closure1_slot3;
            offset = offset.DONT_CLEAR;
            tangon = kiloes;
            if(!(romeon !== offset)) { _fun00004_ip = 298; continue _fun00003 }
 209:
            offset = global;
            output = offset.String;
            result = _closure1_slot1;
            source = _closure1_slot2;
            offset = 3;
            offset = source[offset];
            offset = result.bind(oscard)(offset);
            update = offset.bind(oscard)();
            echoed = update.add;
            offset = 4;
            offset = source[offset];
            offset = result.bind(oscard)(offset);
            result = offset.bind(oscard)(romeon);
            offset = 'ms';
            result = echoed.bind(update)(result, offset);
            offset = result.toDate;
            result = offset.bind(result)();
            offset = result.getTime;
            offset = offset.bind(result)();
            tangon = output.bind(oscard)(offset);
 298:
            entity['expiresAtMs'] = tangon;
            offset = option != backup;
            tangon = kiloes;
            if(!offset) { _fun00004_ip = 333; continue _fun00003 }
 313:
            offset = backup.id;
            offset = option != offset;
            tangon = kiloes;
            if(!offset) { _fun00004_ip = 333; continue _fun00003 }
 328:
            tangon = backup.id;
 333:
            entity['emojiId'] = tangon;
            offset = option != backup;
            tangon = yankee;
            if(!offset) { _fun00004_ip = 353; continue _fun00003 }
 348:
            tangon = backup.name;
 353:
            entity['emojiName'] = tangon;
            offset = global;
            tangon = offset.String;
            if(!(option == report)) { _fun00004_ip = 414; continue _fun00003 }
 370:
            output = _closure1_slot1;
            result = _closure1_slot2;
            kiloes = 3;
            kiloes = result[kiloes];
            kiloes = output.bind(oscard)(kiloes);
            output = kiloes.bind(oscard)();
            kiloes = output.toDate;
            output = kiloes.bind(output)();
            kiloes = output.getTime;
            report = kiloes.bind(output)();
 414:
            tangon = tangon.bind(oscard)(report);
            entity['createdAtMs'] = tangon;
            entity = michal.bind(zuuluu)(entity);
            zuuluu = _closure1_slot1;
            tangon = _closure1_slot2;
            michal = 5;
            michal = tangon[michal];
            report = zuuluu.bind(oscard)(michal);
            tangon = report.track;
            michal = _closure1_slot4;
            zuuluu = michal.CUSTOM_STATUS_UPDATED;
            michal = {};
            output = option != sizing;
            kiloes = null;
            if(!output) { _fun00004_ip = 480; continue _fun00003 }
 475:
            kiloes = sizing.location;
 480:
            michal['location'] = kiloes;
            foxtra = _closure1_slot5;
            foxtra = foxtra.bind(oscard)(backup);
            michal['emoji_type'] = foxtra;
            verify = verify.length;
            michal['text_len'] = verify;
            foxtra = option != romeon;
            verify = null;
            if(!foxtra) { _fun00004_ip = 535; continue _fun00003 }
 519:
            offset = offset.HermesInternal;
            offset = offset.concat;
            verify = offset.bind(yankee)(romeon);
 535:
            michal['clear_after'] = verify;
            option = option == golfie;
            oscard = undefined;
            if(option) { _fun00004_ip = 556; continue _fun00003 }
 551:
            oscard = golfie.value;
 556:
            michal['prompt_type'] = oscard;
            michal = tangon.bind(report)(zuuluu, michal);
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();