// app/modules/emojis/native/utils/EmojiColorUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    entity = function() { // Original name: _getFromCacheOrFallback2
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot0;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    michal = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zuuluu) { _fun00002_ip = 129; continue _fun00001 }
 10:
                    option = michal.cache;
                    golfie = michal.cacheKey;
                    report = michal.fallbackParam;
                    verify = michal.fallbackFunc;
                    offset = undefined;
                    oscard = undefined;
                    SaveGenerator(address=42);
 40:
                    return offset;
 42:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00002_ip = 126; continue _fun00001 }
 48:
                    yankee = option;
                    tangon = yankee.get;
                    zuuluu = golfie;
                    zuuluu = tangon.bind(yankee)(zuuluu);
                    tangon = null;
                    if(!(tangon == zuuluu)) { _fun00002_ip = 123; continue _fun00001 }
 70: // try_start_0
                    report = verify.bind(offset)(report);
                    SaveGenerator(address=79);
 77:
                    return report;
 79:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=8);
                    if(verify) { _fun00002_ip = 115; continue _fun00001 }
 85:
                    oscard = report;
                    if(!(tangon != report)) { _fun00002_ip = 112; continue _fun00001 }
 92:
                    offset = option;
                    verify = offset.set;
                    option = golfie;
                    golfie = oscard;
                    golfie = verify.bind(offset)(option, golfie);
 112: // try_end0
                    return oscard;
 115:
                    return report;
 118: // catch_target0
                    CatchBlockStart(arg_register=4);
                    return tangon;
 123:
                    return zuuluu;
 126:
                    return michal;
 129:
                    return entity;
                }
            };
            michal = entity.next;
            michal = michal.bind(entity)();
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot4 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot4 = entity;
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
    var _closure1_slot0 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.NativeModules;
    var _closure1_slot1 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    option = golfie.bind(entity)(tangon);
    tangon = option.prototype;
    golfie = Object.create(tangon, {constructor: {value: option}});
    romeon = 100;
    foxtra = golfie;
    tangon = new foxtra[option](romeon, yankee);
    tangon = tangon instanceof Object ? tangon : golfie;
    var _closure1_slot2 = tangon;
    tangon = function(argFoo) { // Original name: _getEmojiCacheKey
        entity = argFoo;
        report = entity.name;
        tangon = entity.id;
        entity = global;
        entity = entity.HermesInternal;
        zuuluu = entity.concat;
        michal = '';
        entity = '-';
        entity = zuuluu.bind(michal)(report, entity, tangon);
        return entity;
    };
    var _closure1_slot3 = tangon;
    michal = function() {
        tangon = _closure1_slot0;
        zuuluu = undefined;
        michal = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    StartGenerator();
                    michal = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zuuluu) { _fun00004_ip = 137; continue _fun00003 }
 13:
                    option = michal.emoji;
                    oscard = michal.emojiSource;
                    report = undefined;
                    SaveGenerator(address=31);
 29:
                    return report;
 31:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00004_ip = 134; continue _fun00003 }
 37:
                    tangon = {};
                    golfie = _closure1_slot2;
                    tangon['cache'] = golfie;
                    golfie = _closure1_slot3;
                    golfie = golfie.bind(report)(option);
                    tangon['cacheKey'] = golfie;
                    tangon['fallbackParam'] = oscard;
                    zuuluu = _closure1_slot1;
                    zuuluu = zuuluu.ImageManager;
                    zuuluu = zuuluu.getDominantColors;
                    tangon['fallbackFunc'] = zuuluu;
                    zuuluu = function() { // Original name: _getFromCacheOrFallback
                        entity = undefined;
                        tangon = _closure1_slot4;
                        zuuluu = tangon.apply;
                        entity = arguments;
                        michal = entity;
                        entity = this;
                        entity = zuuluu.bind(tangon)(entity, michal);
                        return entity;
                    };
                    zuuluu = zuuluu.bind(report)(tangon);
                    SaveGenerator(address=109);
 107:
                    return zuuluu;
 109:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(tangon) { _fun00004_ip = 131; continue _fun00003 }
 115:
                    report = null;
                    tangon = zuuluu;
                    if(!(report == tangon)) { _fun00004_ip = 128; continue _fun00003 }
 124:
                    tangon = new Array(0);
 128:
                    return tangon;
 131:
                    return zuuluu;
 134:
                    return michal;
 137:
                    return entity;
                }
            };
            michal = entity.next;
            michal = michal.bind(entity)();
            return entity;
        };
        michal = tangon.bind(zuuluu)(michal);
        var _closure2_slot0 = michal;
        entity = function() {
            entity = undefined;
            tangon = _closure2_slot0;
            zuuluu = tangon.apply;
            entity = arguments;
            michal = entity;
            entity = this;
            entity = zuuluu.bind(tangon)(entity, michal);
            return entity;
        };
        return entity;
    };
    michal = michal.bind(entity)();
    tangon = 3;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/emojis/native/utils/EmojiColorUtils.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['getEmojiDominantColors'] = michal;
    return entity;
})();