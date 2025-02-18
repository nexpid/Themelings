// app/modules/custom_status/setCustomStatus.tsx
export default (function(argFoo, argBar, argBaz, argCor, argGra, argFre, argPlu) {
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
    michal = function(argFoo, argBar, argBaz, argCor, argGra) { // Original name: setCustomStatus
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            michal = argFoo;
            foxtra = argBar;
            verify = argBaz;
            kiloes = argCor;
            report = argGra;
            entity = michal.trim;
            offset = entity.bind(michal)();
            entity = offset.length;
            oscard = 0;
            if(!(!(entity > oscard))) { _fun00004_ip = 86; continue _fun00003 }
 36:
            entity = null;
            if(!(entity == foxtra)) { _fun00004_ip = 86; continue _fun00003 }
 42:
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
 86:
            michal = _closure1_slot0;
            zuuluu = _closure1_slot2;
            entity = 2;
            entity = zuuluu[entity];
            romeon = undefined;
            entity = michal.bind(romeon)(entity);
            zuuluu = entity.CustomStatusSetting;
            michal = zuuluu.updateSetting;
            entity = {};
            tangon = offset.length;
            oscard = tangon > oscard;
            option = '';
            tangon = option;
            if(!oscard) { _fun00004_ip = 147; continue _fun00003 }
 144:
            tangon = offset;
 147:
            entity['text'] = tangon;
            oscard = null;
            golfie = oscard != verify;
            backup = '0';
            tangon = backup;
            if(!golfie) { _fun00004_ip = 275; continue _fun00003 }
 169:
            golfie = _closure1_slot3;
            golfie = golfie.DONT_CLEAR;
            tangon = backup;
            if(!(verify !== golfie)) { _fun00004_ip = 275; continue _fun00003 }
 186:
            golfie = global;
            sizing = golfie.String;
            output = _closure1_slot1;
            update = _closure1_slot2;
            golfie = 3;
            golfie = update[golfie];
            golfie = output.bind(romeon)(golfie);
            echoed = golfie.bind(romeon)();
            result = echoed.add;
            golfie = 4;
            golfie = update[golfie];
            golfie = output.bind(romeon)(golfie);
            output = golfie.bind(romeon)(verify);
            golfie = 'ms';
            output = result.bind(echoed)(output, golfie);
            golfie = output.toDate;
            output = golfie.bind(output)();
            golfie = output.getTime;
            golfie = golfie.bind(output)();
            tangon = sizing.bind(romeon)(golfie);
 275:
            entity['expiresAtMs'] = tangon;
            golfie = oscard != foxtra;
            tangon = backup;
            if(!golfie) { _fun00004_ip = 310; continue _fun00003 }
 290:
            golfie = foxtra.id;
            golfie = oscard != golfie;
            tangon = backup;
            if(!golfie) { _fun00004_ip = 310; continue _fun00003 }
 305:
            tangon = foxtra.id;
 310:
            entity['emojiId'] = tangon;
            golfie = oscard != foxtra;
            tangon = option;
            if(!golfie) { _fun00004_ip = 330; continue _fun00003 }
 325:
            tangon = foxtra.name;
 330:
            entity['emojiName'] = tangon;
            golfie = global;
            tangon = golfie.String;
            if(!(oscard == report)) { _fun00004_ip = 391; continue _fun00003 }
 347:
            sizing = _closure1_slot1;
            output = _closure1_slot2;
            backup = 3;
            backup = output[backup];
            backup = sizing.bind(romeon)(backup);
            sizing = backup.bind(romeon)();
            backup = sizing.toDate;
            sizing = backup.bind(sizing)();
            backup = sizing.getTime;
            report = backup.bind(sizing)();
 391:
            tangon = tangon.bind(romeon)(report);
            entity['createdAtMs'] = tangon;
            entity = michal.bind(zuuluu)(entity);
            zuuluu = _closure1_slot1;
            tangon = _closure1_slot2;
            michal = 5;
            michal = tangon[michal];
            report = zuuluu.bind(romeon)(michal);
            tangon = report.track;
            michal = _closure1_slot4;
            zuuluu = michal.CUSTOM_STATUS_UPDATED;
            michal = {};
            sizing = oscard != kiloes;
            backup = null;
            if(!sizing) { _fun00004_ip = 457; continue _fun00003 }
 452:
            backup = kiloes.location;
 457:
            michal['location'] = backup;
            yankee = _closure1_slot5;
            yankee = yankee.bind(romeon)(foxtra);
            michal['emoji_type'] = yankee;
            offset = offset.length;
            michal['text_len'] = offset;
            offset = oscard != verify;
            oscard = null;
            if(!offset) { _fun00004_ip = 512; continue _fun00003 }
 496:
            golfie = golfie.HermesInternal;
            golfie = golfie.concat;
            oscard = golfie.bind(option)(verify);
 512:
            michal['clear_after'] = oscard;
            michal = tangon.bind(report)(zuuluu, michal);
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();