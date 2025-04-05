// app/stores/SurveyStore.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    entity = argCor;
    var _closure1_slot2 = entity;
    var _closure1_slot3 = oscard;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
 2: // try_start_0
            michal = global;
            zuuluu = michal.Boolean;
            zuuluu = zuuluu.prototype;
            tangon = zuuluu.valueOf;
            zuuluu = tangon.call;
            option = michal.Reflect;
            golfie = option.construct;
            oscard = michal.Boolean;
            report = new Array(0);
            michal = function() {
                entity = undefined;
                return entity;
            };
            michal = golfie.bind(option)(oscard, report, michal);
            michal = zuuluu.bind(tangon)(michal);
            michal = !michal;
            var _closure2_slot0 = michal;
 72: // try_end0
            _fun00002_ip = 76; continue _fun00001;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            michal = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot25 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot25 = entity;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zuuluu = argFoo;
            var _closure2_slot0 = zuuluu;
            report = global;
            michal = report.Symbol;
            tangon = 'undefined';
            michal = typeof michal;
            michal = tangon !== michal;
            if(!michal) { _fun00004_ip = 46; continue _fun00003 }
 30:
            tangon = report.Symbol;
            tangon = tangon.iterator;
            michal = zuuluu[tangon];
 46:
            if(michal) { _fun00004_ip = 55; continue _fun00003 }
 49:
            michal = zuuluu.@@iterator;
 55:
            if(michal) { _fun00004_ip = 345; continue _fun00003 }
 61:
            oscard = report.Array;
            tangon = oscard.isArray;
            oscard = tangon.bind(oscard)(zuuluu);
            tangon = michal;
            if(oscard) { _fun00004_ip = 323; continue _fun00003 }
 86:
            option = undefined;
            oscard = undefined;
            if(!zuuluu) { _fun00004_ip = 283; continue _fun00003 }
 96:
            verify = 'string';
            golfie = typeof zuuluu;
            if(!(verify !== golfie)) { _fun00004_ip = 270; continue _fun00003 }
 110:
            golfie = {};
            verify = golfie.toString;
            golfie = verify.call;
            yankee = golfie.bind(verify)(zuuluu);
            offset = yankee.slice;
            verify = 8;
            golfie = -1;
            verify = offset.bind(yankee)(verify, golfie);
            golfie = 'Object';
            golfie = golfie === verify;
            if(!golfie) { _fun00004_ip = 163; continue _fun00003 }
 158:
            golfie = zuuluu.constructor;
 163:
            offset = verify;
            if(!golfie) { _fun00004_ip = 179; continue _fun00003 }
 169:
            golfie = zuuluu.constructor;
            offset = golfie.name;
 179:
            golfie = 'Map';
            if(!(golfie !== offset)) { _fun00004_ip = 249; continue _fun00003 }
 187:
            golfie = 'Set';
            if(!(golfie !== offset)) { _fun00004_ip = 249; continue _fun00003 }
 195:
            golfie = 'Arguments';
            if(!(golfie !== offset)) { _fun00004_ip = 234; continue _fun00003 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golfie = verify.test;
            verify = golfie.bind(verify)(offset);
            golfie = undefined;
            if(!verify) { _fun00004_ip = 247; continue _fun00003 }
 234:
            verify = _closure1_slot27;
            golfie = verify.bind(option)(zuuluu, option);
 247:
            _fun00004_ip = 265; continue _fun00003;
 249:
            offset = report.Array;
            verify = offset.from;
            golfie = verify.bind(offset)(zuuluu);
 265:
            oscard = golfie;
            _fun00004_ip = 283; continue _fun00003;
 270:
            golfie = _closure1_slot27;
            oscard = golfie.bind(option)(zuuluu, option);
 283:
            tangon = oscard;
            if(tangon) { _fun00004_ip = 323; continue _fun00003 }
 289:
            golfie = report.TypeError;
            report = golfie.prototype;
            oscard = Object.create(report, {constructor: {value: golfie}});
            foxtra = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            backup = oscard;
            report = new backup[golfie](foxtra, romeon);
            report = report instanceof Object ? report : oscard;
            throw report;
 323:
            if(!tangon) { _fun00004_ip = 330; continue _fun00003 }
 326:
            _closure2_slot0 = tangon;
 330:
            tangon = 0;
            var _closure2_slot1 = tangon;
            entity = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    michal = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(michal >= entity))) { _fun00006_ip = 56; continue _fun00005 }
 20:
                    entity = {};
                    michal = false;
                    entity['done'] = michal;
                    zuuluu = _closure2_slot0;
                    michal = _closure2_slot1;
                    michal = parseFloat(michal);
                    tangon = michal + 1;
                    _closure2_slot1 = tangon;
                    michal = zuuluu[michal];
                    entity['value'] = michal;
                    _fun00006_ip = 67; continue _fun00005;
 56:
                    michal = {};
                    zuuluu = true;
                    michal['done'] = zuuluu;
                    entity = michal;
 67:
                    return entity;
                }
            };
            return entity;
 345:
            entity = michal.call;
            zuuluu = entity.bind(michal)(zuuluu);
            michal = zuuluu.next;
            entity = michal.bind;
            entity = entity.bind(michal)(zuuluu);
            return entity;
        }
    };
    var _closure1_slot26 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            tangon = argFoo;
            entity = null;
            zuuluu = undefined;
            entity = entity == zuuluu;
            if(entity) { _fun00008_ip = 23; continue _fun00007 }
 14:
            michal = tangon.length;
            entity = zuuluu > michal;
 23:
            michal = undefined;
            if(!entity) { _fun00008_ip = 33; continue _fun00007 }
 28:
            michal = tangon.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zuuluu)(michal);
            zuuluu = 0;
            report = zuuluu < michal;
            if(!report) { _fun00008_ip = 70; continue _fun00007 }
 55:
            report = tangon[zuuluu];
            entity[zuuluu] = report;
            zuuluu = zuuluu + 1;
            if(zuuluu < michal) { _fun00008_ip = 55; continue _fun00007 }
 70:
            return entity;
        }
    };
    var _closure1_slot27 = entity;
    entity = function(argFoo) { // Original name: meetsSurveyRequirements
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            status = argFoo;
            sequen = undefined;
            config = undefined;
            record = undefined;
            cntext = undefined;
            papara = undefined;
            target = undefined;
            vacuum = status.guild_requirements;
            if(!(sequen === vacuum)) { _fun00010_ip = 31; continue _fun00009 }
 27:
            vacuum = new Array(0);
 31:
            ctrled = status.guild_size;
            if(!(sequen === ctrled)) { _fun00010_ip = 51; continue _fun00009 }
 41:
            ctrled = [null, null];
 51:
            source = status.guild_permissions;
            if(!(sequen === source)) { _fun00010_ip = 67; continue _fun00009 }
 63:
            source = new Array(0);
 67:
            zuuluu = vacuum.length;
            update = 0;
            entity = true;
            if(!(update !== zuuluu)) { _fun00010_ip = 1140; continue _fun00009 }
 83:
            zuuluu = _closure1_slot26;
            oscard = zuuluu.bind(sequen)(vacuum);
            report = oscard.bind(sequen)();
            zuuluu = report.done;
            if(zuuluu) { _fun00010_ip = 149; continue _fun00009 }
 107:
            option = report.value;
            golfie = _closure1_slot24;
            zuuluu = golfie.has;
            zuuluu = zuuluu.bind(golfie)(option);
            entity = false;
            if(!zuuluu) { _fun00010_ip = 1140; continue _fun00009 }
 134:
            golfie = oscard.bind(sequen)();
            zuuluu = golfie.done;
            report = golfie;
            if(!zuuluu) { _fun00010_ip = 107; continue _fun00009 }
 149:
            report = vacuum.includes;
            zuuluu = _closure1_slot23;
            zuuluu = zuuluu.GUILD_SIZE_ALL;
            report = report.bind(vacuum)(zuuluu);
            zuuluu = global;
            golfie = zuuluu.Object;
            oscard = golfie.values;
            option = _closure1_slot10;
            zuuluu = option.getGuilds;
            zuuluu = zuuluu.bind(option)();
            result = oscard.bind(golfie)(zuuluu);
            zuuluu = result.length;
            oscard = update < zuuluu;
            output = null;
            sizing = 12;
            kiloes = 1;
            backup = true;
            foxtra = 0;
            romeon = undefined;
            yankee = undefined;
            offset = undefined;
            verify = undefined;
            option = undefined;
            golfie = undefined;
            zuuluu = true;
            if(!oscard) { _fun00010_ip = 1128; continue _fun00009 }
 242:
            config = result[foxtra];
            if(report) { _fun00010_ip = 275; continue _fun00009 }
 249:
            sierra = vacuum.includes;
            oscard = _closure1_slot23;
            oscard = oscard.GUILD_SIZE;
            oscard = sierra.bind(vacuum)(oscard);
            if(!oscard) { _fun00010_ip = 418; continue _fun00009 }
 275:
            limora = _closure1_slot9;
            sierra = limora.getMemberCount;
            oscard = config;
            oscard = oscard.id;
            variable38 = sierra.bind(limora)(oscard);
            oscard = output == variable38;
            sierra = false;
            variable37 = variable38;
            variable36 = yankee;
            quebec = offset;
            equals = verify;
            whisks = option;
            limora = golfie;
            if(oscard) { _fun00010_ip = 1089; continue _fun00009 }
 328:
            oscard = ctrled[update];
            if(!(output != oscard)) { _fun00010_ip = 370; continue _fun00009 }
 336:
            oscard = ctrled[update];
            oscard = variable38 < oscard;
            sierra = false;
            variable37 = variable38;
            variable36 = yankee;
            quebec = offset;
            equals = verify;
            whisks = option;
            limora = golfie;
            if(oscard) { _fun00010_ip = 1089; continue _fun00009 }
 370:
            oscard = ctrled[kiloes];
            romeon = variable38;
            if(!(output != oscard)) { _fun00010_ip = 418; continue _fun00009 }
 381:
            oscard = ctrled[kiloes];
            oscard = variable38 > oscard;
            romeon = variable38;
            sierra = false;
            variable37 = romeon;
            variable36 = yankee;
            quebec = offset;
            equals = verify;
            whisks = option;
            limora = golfie;
            if(oscard) { _fun00010_ip = 1089; continue _fun00009 }
 418:
            variable38 = vacuum.includes;
            oscard = _closure1_slot23;
            oscard = oscard.IS_COMMUNITY;
            oscard = variable38.bind(vacuum)(oscard);
            if(!oscard) { _fun00010_ip = 492; continue _fun00009 }
 441:
            variable39 = config;
            variable38 = variable39.hasFeature;
            oscard = _closure1_slot14;
            oscard = oscard.COMMUNITY;
            oscard = variable38.bind(variable39)(oscard);
            sierra = backup;
            variable37 = romeon;
            variable36 = yankee;
            quebec = offset;
            equals = verify;
            whisks = option;
            limora = golfie;
            if(!oscard) { _fun00010_ip = 1089; continue _fun00009 }
 492:
            variable38 = vacuum.includes;
            oscard = _closure1_slot23;
            oscard = oscard.IS_HUB;
            oscard = variable38.bind(vacuum)(oscard);
            if(!oscard) { _fun00010_ip = 566; continue _fun00009 }
 515:
            variable39 = config;
            variable38 = variable39.hasFeature;
            oscard = _closure1_slot14;
            oscard = oscard.HUB;
            oscard = variable38.bind(variable39)(oscard);
            sierra = backup;
            variable37 = romeon;
            variable36 = yankee;
            quebec = offset;
            equals = verify;
            whisks = option;
            limora = golfie;
            if(!oscard) { _fun00010_ip = 1089; continue _fun00009 }
 566:
            variable38 = vacuum.includes;
            oscard = _closure1_slot23;
            oscard = oscard.GUILD_PERMISSIONS;
            oscard = variable38.bind(vacuum)(oscard);
            if(!oscard) { _fun00010_ip = 771; continue _fun00009 }
 592:
            oscard = source.length;
            sierra = backup;
            variable37 = romeon;
            variable36 = yankee;
            quebec = offset;
            equals = verify;
            whisks = option;
            limora = golfie;
            if(!(update !== oscard)) { _fun00010_ip = 1089; continue _fun00009 }
 625:
            cntext = false;
            oscard = _closure1_slot26;
            oscard = oscard.bind(sequen)(source);
            papara = oscard;
            oscard = oscard.bind(sequen)();
            record = oscard;
            oscard = oscard.done;
            if(oscard) { _fun00010_ip = 741; continue _fun00009 }
 654:
            oscard = record;
            target = oscard.value;
 662: // try_start_0
            variable38 = _closure1_slot2;
            oscard = _closure1_slot3;
            oscard = oscard[sizing];
            variable39 = variable38.bind(sequen)(oscard);
            variable38 = variable39.deserialize;
            oscard = target;
            variable40 = variable38.bind(variable39)(oscard);
            variable39 = _closure1_slot11;
            variable38 = variable39.can;
            oscard = config;
            oscard = variable38.bind(variable39)(variable40, oscard);
            if(oscard) { _fun00010_ip = 717; continue _fun00009 }
 715: // try_end0
            _fun00010_ip = 723; continue _fun00009;
 717: // try_start_1
            cntext = true;
 719: // try_end1
            _fun00010_ip = 741; continue _fun00009;
 721: // catch_target0 // catch_target1
            CatchBlockStart(arg_register=5);
 723:
            oscard = papara;
            oscard = oscard.bind(sequen)();
            record = oscard;
            oscard = oscard.done;
            if(!oscard) { _fun00010_ip = 654; continue _fun00009 }
 741:
            oscard = cntext;
            sierra = backup;
            variable37 = romeon;
            variable36 = yankee;
            quebec = offset;
            equals = verify;
            whisks = option;
            limora = golfie;
            if(!oscard) { _fun00010_ip = 1089; continue _fun00009 }
 771:
            variable38 = _closure1_slot13;
            oscard = variable38.getCurrentUser;
            variable41 = oscard.bind(variable38)();
            oscard = output == variable41;
            variable38 = undefined;
            if(oscard) { _fun00010_ip = 798; continue _fun00009 }
 793:
            variable38 = variable41.id;
 798:
            variable42 = config;
            oscard = variable42.ownerId;
            variable40 = variable38 === oscard;
            variable39 = _closure1_slot11;
            variable38 = variable39.can;
            oscard = _closure1_slot15;
            oscard = oscard.ADMINISTRATOR;
            variable39 = variable38.bind(variable39)(oscard, variable42);
            variable38 = vacuum.includes;
            oscard = _closure1_slot23;
            oscard = oscard.IS_OWNER;
            oscard = variable38.bind(vacuum)(oscard);
            if(!oscard) { _fun00010_ip = 887; continue _fun00009 }
 860:
            sierra = backup;
            variable37 = romeon;
            variable36 = variable41;
            equals = variable39;
            whisks = option;
            limora = golfie;
            quebec = variable40;
            if(!quebec) { _fun00010_ip = 1089; continue _fun00009 }
 887:
            variable38 = vacuum.includes;
            oscard = _closure1_slot23;
            oscard = oscard.IS_ADMIN;
            oscard = variable38.bind(vacuum)(oscard);
            if(!oscard) { _fun00010_ip = 937; continue _fun00009 }
 910:
            sierra = backup;
            variable37 = romeon;
            variable36 = variable41;
            quebec = variable40;
            equals = variable39;
            whisks = option;
            limora = golfie;
            if(!variable39) { _fun00010_ip = 1089; continue _fun00009 }
 937:
            oscard = _closure1_slot21;
            if(!(output == oscard)) { _fun00010_ip = 949; continue _fun00009 }
 945:
            variable38 = {};
            _fun00010_ip = 953; continue _fun00009;
 949:
            variable38 = _closure1_slot21;
 953:
            _closure1_slot21 = variable38;
            oscard = status.key;
            oscard = variable38[oscard];
            if(!(output == oscard)) { _fun00010_ip = 983; continue _fun00009 }
 970:
            variable38 = _closure1_slot21;
            oscard = status.key;
            variable38[oscard] = status;
 983:
            variable38 = _closure1_slot12;
            oscard = variable38.getGuildId;
            variable38 = oscard.bind(variable38)();
            oscard = output != variable38;
            if(!oscard) { _fun00010_ip = 1016; continue _fun00009 }
 1004:
            variable42 = config;
            variable42 = variable42.id;
            oscard = variable38 === variable42;
 1016:
            variable43 = vacuum.includes;
            variable42 = _closure1_slot23;
            variable42 = variable42.IS_VIEWING;
            variable42 = variable43.bind(vacuum)(variable42);
            if(!variable42) { _fun00010_ip = 1063; continue _fun00009 }
 1039:
            sierra = backup;
            variable37 = romeon;
            variable36 = variable41;
            quebec = variable40;
            equals = variable39;
            whisks = variable38;
            limora = oscard;
            if(!limora) { _fun00010_ip = 1089; continue _fun00009 }
 1063:
            sierra = backup;
            variable37 = romeon;
            variable36 = variable41;
            quebec = variable40;
            equals = variable39;
            whisks = variable38;
            limora = oscard;
            entity = true;
            if(!report) { _fun00010_ip = 1140; continue _fun00009 }
 1089:
            foxtra = foxtra + 1;
            oscard = result.length;
            backup = sierra;
            romeon = variable37;
            yankee = variable36;
            offset = quebec;
            verify = equals;
            option = whisks;
            golfie = limora;
            zuuluu = backup;
            if(foxtra < oscard) { _fun00010_ip = 242; continue _fun00009 }
 1128:
            entity = false;
            if(!report) { _fun00010_ip = 1140; continue _fun00009 }
 1133:
            entity = false;
            if(!zuuluu) { _fun00010_ip = 1140; continue _fun00009 }
 1138:
            entity = true;
 1140:
            return entity;
        }
    };
    var _closure1_slot28 = entity;
    verify = function(argFoo) { // Original name: setSurvey
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.survey;
            tangon = _closure1_slot18;
            entity = global;
            report = entity.Date;
            entity = report.now;
            entity = entity.bind(report)();
            tangon['lastFetched'] = entity;
            entity = _closure1_slot18;
            entity = entity.hiddenSurveys;
            tangon = null;
            if(!(tangon == entity)) { _fun00012_ip = 67; continue _fun00011 }
 55:
            report = _closure1_slot18;
            entity = {};
            report['hiddenSurveys'] = entity;
 67:
            if(!(tangon != zuuluu)) { _fun00012_ip = 231; continue _fun00011 }
 74:
            entity = _closure1_slot18;
            report = entity.hiddenSurveys;
            entity = zuuluu.key;
            entity = report[entity];
            if(!(tangon == entity)) { _fun00012_ip = 231; continue _fun00011 }
 100:
            report = _closure1_slot28;
            entity = undefined;
            report = report.bind(entity)(zuuluu);
            if(report) { _fun00012_ip = 116; continue _fun00011 }
 114:
            return entity;
 116:
            report = _closure1_slot19;
            if(report) { _fun00012_ip = 235; continue _fun00011 }
 123:
            report = _closure1_slot20;
            if(report) { _fun00012_ip = 235; continue _fun00011 }
 130:
            oscard = _closure1_slot0;
            golfie = _closure1_slot3;
            report = 13;
            report = golfie[report];
            report = oscard.bind(entity)(report);
            golfie = report.Storage;
            oscard = golfie.get;
            report = _closure1_slot16;
            option = oscard.bind(golfie)(report);
            tangon = tangon == option;
            if(tangon) { _fun00012_ip = 224; continue _fun00011 }
 177:
            oscard = _closure1_slot1;
            golfie = _closure1_slot3;
            report = 14;
            report = golfie[report];
            report = oscard.bind(entity)(report);
            golfie = report.bind(entity)();
            oscard = golfie.diff;
            report = 'day';
            oscard = oscard.bind(golfie)(option, report);
            report = 7;
            tangon = oscard < report;
 224:
            if(tangon) { _fun00012_ip = 235; continue _fun00011 }
 227:
            _closure1_slot22 = zuuluu;
 231:
            michal = undefined;
            return michal;
 235:
            return entity;
        }
    };
    var _closure1_slot29 = verify;
    entity = function() { // Original name: handleSelectedGuildChange
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            zuuluu = _closure1_slot22;
            entity = null;
            if(!(entity != zuuluu)) { _fun00014_ip = 46; continue _fun00013 }
 13:
            report = _closure1_slot22;
            tangon = _closure1_slot28;
            zuuluu = undefined;
            tangon = tangon.bind(zuuluu)(report);
            zuuluu = !tangon;
            zuuluu = !zuuluu;
            if(tangon) { _fun00014_ip = 43; continue _fun00013 }
 37:
            _closure1_slot22 = entity;
            zuuluu = false;
 43:
            if(zuuluu) { _fun00014_ip = 156; continue _fun00013 }
 46:
            zuuluu = _closure1_slot21;
            if(!(entity == zuuluu)) { _fun00014_ip = 58; continue _fun00013 }
 54:
            zuuluu = {};
            _fun00014_ip = 62; continue _fun00013;
 58:
            zuuluu = _closure1_slot21;
 62:
            _closure1_slot21 = zuuluu;
            zuuluu = global;
            report = zuuluu.Object;
            tangon = report.values;
            zuuluu = _closure1_slot21;
            tangon = tangon.bind(report)(zuuluu);
            zuuluu = 0;
            oscard = tangon[zuuluu];
            if(!(entity != oscard)) { _fun00014_ip = 140; continue _fun00013 }
 98:
            zuuluu = _closure1_slot28;
            report = undefined;
            zuuluu = zuuluu.bind(report)(oscard);
            if(!zuuluu) { _fun00014_ip = 140; continue _fun00013 }
 112:
            tangon = _closure1_slot29;
            zuuluu = {};
            golfie = 'SURVEY_FETCHED';
            zuuluu['type'] = golfie;
            zuuluu['survey'] = oscard;
            zuuluu = tangon.bind(report)(zuuluu);
            _fun00014_ip = 152; continue _fun00013;
 140:
            zuuluu = _closure1_slot22;
            if(!(entity != zuuluu)) { _fun00014_ip = 152; continue _fun00013 }
 148:
            _closure1_slot22 = entity;
 152:
            entity = undefined;
            return entity;
 156:
            entity = false;
            return entity;
        }
    };
    var _closure1_slot30 = entity;
    michal = global;
    yankee = michal.Object;
    offset = yankee.defineProperty;
    option = {};
    entity = true;
    option['value'] = entity;
    entity = '__esModule';
    entity = offset.bind(yankee)(zuuluu, entity, option);
    entity = 0;
    option = oscard[entity];
    entity = undefined;
    option = golfie.bind(entity)(option);
    var _closure1_slot4 = option;
    option = 1;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot5 = option;
    option = 2;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot6 = option;
    option = 3;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot7 = option;
    option = 4;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot8 = option;
    option = 5;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot9 = option;
    option = 6;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot10 = option;
    option = 7;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot11 = option;
    option = 8;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot12 = option;
    option = 9;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot13 = option;
    option = 10;
    option = oscard[option];
    option = report.bind(entity)(option);
    offset = option.GuildFeatures;
    var _closure1_slot14 = offset;
    offset = option.Permissions;
    var _closure1_slot15 = offset;
    option = option.FIRST_RUN_DATE_KEY;
    var _closure1_slot16 = option;
    offset = {'hiddenSurveys': null, 'surveyOverride': null, 'lastFetched': null, 'lastSeen': null};
    option = {};
    offset['hiddenSurveys'] = option;
    option = null;
    var _closure1_slot17 = offset;
    var _closure1_slot18 = offset;
    offset = false;
    var _closure1_slot19 = offset;
    var _closure1_slot20 = offset;
    offset = {};
    var _closure1_slot21 = offset;
    var _closure1_slot22 = option;
    yankee = {};
    option = 'is_owner';
    yankee['IS_OWNER'] = option;
    option = 'is_admin';
    yankee['IS_ADMIN'] = option;
    option = 'is_community';
    yankee['IS_COMMUNITY'] = option;
    option = 'guild_size';
    yankee['GUILD_SIZE'] = option;
    option = 'is_hub';
    yankee['IS_HUB'] = option;
    option = 'is_viewing';
    yankee['IS_VIEWING'] = option;
    option = 'guild_permissions';
    yankee['GUILD_PERMISSIONS'] = option;
    option = 'guild_size_all';
    yankee['GUILD_SIZE_ALL'] = option;
    var _closure1_slot23 = yankee;
    offset = michal.Set;
    option = michal.Object;
    michal = option.values;
    backup = michal.bind(option)(yankee);
    option = offset.prototype;
    option = Object.create(option, {constructor: {value: offset}});
    kiloes = option;
    michal = new kiloes[offset](backup, foxtra);
    michal = michal instanceof Object ? michal : option;
    var _closure1_slot24 = michal;
    michal = 15;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    option = michal.PersistedStore;
    michal = function(argFoo) {
        tangon = function() { // Original name: SurveyStore
            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                tangon = this;
                zuuluu = undefined;
                report = undefined;
                entity = _closure1_slot4;
                michal = _closure2_slot0;
                entity = entity.bind(zuuluu)(tangon, michal);
                entity = _closure1_slot7;
                verify = entity.bind(zuuluu)(michal);
                michal = _closure1_slot6;
                entity = _closure1_slot25;
                entity = entity.bind(zuuluu)();
                if(entity) { _fun00016_ip = 69; continue _fun00015 }
 51:
                golfie = verify.apply;
                report = arguments;
                entity = report;
                entity = golfie.bind(verify)(tangon, entity);
                _fun00016_ip = 105; continue _fun00015;
 69:
                golfie = global;
                option = golfie.Reflect;
                golfie = option.construct;
                oscard = _closure1_slot7;
                oscard = oscard.bind(zuuluu)(tangon);
                oscard = oscard.constructor;
                report = arguments;
                entity = golfie.bind(option)(verify, report, oscard);
 105:
                entity = michal.bind(zuuluu)(tangon, entity);
                return entity;
            }
        };
        var _closure2_slot0 = tangon;
        report = _closure1_slot8;
        zuuluu = undefined;
        michal = argFoo;
        michal = report.bind(zuuluu)(tangon, michal);
        michal = _closure1_slot5;
        report = {};
        entity = 'initialize';
        report['key'] = entity;
        entity = function(argFoo) { // Original name: value
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                michal = argFoo;
                tangon = this;
                entity = null;
                if(!(entity == michal)) { _fun00018_ip = 19; continue _fun00017 }
 12:
                michal = _closure1_slot17;
 19:
                _closure1_slot18 = michal;
                zuuluu = tangon.syncWith;
                report = _closure1_slot12;
                michal = new Array(1);
                michal[0] = report;
                entity = _closure1_slot30;
                entity = zuuluu.bind(tangon)(michal, entity);
                entity = undefined;
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(5);
        entity[0] = report;
        report = {};
        golfie = 'getState';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = _closure1_slot18;
            return entity;
        };
        report['value'] = golfie;
        entity[1] = report;
        report = {};
        golfie = 'getCurrentSurvey';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = _closure1_slot22;
            return entity;
        };
        report['value'] = golfie;
        entity[2] = report;
        report = {};
        golfie = 'getSurveyOverride';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = _closure1_slot18;
            entity = entity.surveyOverride;
            return entity;
        };
        report['value'] = golfie;
        entity[3] = report;
        report = {};
        golfie = 'getLastSeenTimestamp';
        report['key'] = golfie;
        oscard = function() { // Original name: value
            entity = _closure1_slot18;
            entity = entity.lastSeen;
            return entity;
        };
        report['value'] = oscard;
        entity[4] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    option = michal.bind(entity)(option);
    michal = 'SurveyStore';
    option['displayName'] = michal;
    option['persistKey'] = michal;
    michal = new Array(3);
    offset = function(argFoo) {
        entity = {};
        zuuluu = argFoo;
        tangon = entity;
        michal = copyDataProperties(tangon, zuuluu);
        michal = delete entity.validSurveys;
        michal = delete entity.currentSurvey;
        michal = delete entity.iosIsPushNotificationClicked;
        michal = delete entity.iosIsInviteShown;
        michal = delete entity.iosFirstRunDate;
        return entity;
    };
    michal[0] = offset;
    offset = function(argFoo) {
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            michal = argFoo;
            entity = {};
            oscard = entity;
            report = michal;
            zuuluu = copyDataProperties(oscard, report);
            michal = michal.lastSeen;
            zuuluu = null;
            tangon = zuuluu != michal;
            if(!tangon) { _fun00020_ip = 33; continue _fun00019 }
 30:
            zuuluu = michal;
 33:
            michal = 'lastSeen';
            entity[michal] = zuuluu;
            return entity;
        }
    };
    michal[1] = offset;
    offset = function(argFoo) {
        _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
            michal = argFoo;
            entity = {};
            report = entity;
            tangon = michal;
            zuuluu = copyDataProperties(report, tangon);
            zuuluu = michal.hiddenSurveys;
            michal = null;
            if(!(michal == zuuluu)) { _fun00022_ip = 29; continue _fun00021 }
 27:
            zuuluu = {};
 29:
            michal = 'hiddenSurveys';
            entity[michal] = zuuluu;
            return entity;
        }
    };
    michal[2] = offset;
    option['migrations'] = michal;
    michal = 16;
    michal = oscard[michal];
    backup = golfie.bind(entity)(michal);
    michal = {};
    offset = function() { // Original name: fetchSurvey
        _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
            michal = _closure1_slot18;
            michal = michal.lastFetched;
            tangon = null;
            michal = tangon != michal;
            if(!michal) { _fun00024_ip = 75; continue _fun00023 }
 22:
            zuuluu = global;
            report = zuuluu.Date;
            zuuluu = report.now;
            report = zuuluu.bind(report)();
            zuuluu = _closure1_slot18;
            oscard = zuuluu.lastFetched;
            golfie = tangon != oscard;
            zuuluu = 0;
            if(!golfie) { _fun00024_ip = 61; continue _fun00023 }
 58:
            zuuluu = oscard;
 61:
            report = report - zuuluu;
            zuuluu = 86400000;
            michal = report < zuuluu;
 75:
            if(!michal) { _fun00024_ip = 92; continue _fun00023 }
 78:
            zuuluu = _closure1_slot18;
            zuuluu = zuuluu.surveyOverride;
            michal = tangon == zuuluu;
 92:
            if(michal) { _fun00024_ip = 141; continue _fun00023 }
 95:
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot3;
            michal = 11;
            zuuluu = zuuluu[michal];
            michal = undefined;
            tangon = tangon.bind(michal)(zuuluu);
            zuuluu = tangon.surveyFetch;
            entity = _closure1_slot18;
            michal = entity.surveyOverride;
            entity = true;
            entity = zuuluu.bind(tangon)(michal, entity);
 141:
            entity = undefined;
            return entity;
        }
    };
    michal['CONNECTION_OPEN'] = offset;
    michal['SURVEY_FETCHED'] = verify;
    verify = function(argFoo) { // Original name: handleSurveyHide
        _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
            entity = argFoo;
            michal = entity.key;
            entity = _closure1_slot18;
            tangon = entity.hiddenSurveys;
            entity = true;
            tangon[michal] = entity;
            tangon = null;
            _closure1_slot22 = tangon;
            entity = _closure1_slot21;
            if(!(tangon == entity)) { _fun00026_ip = 45; continue _fun00025 }
 41:
            entity = {};
            _fun00026_ip = 49; continue _fun00025;
 45:
            entity = _closure1_slot21;
 49:
            _closure1_slot21 = entity;
            entity = delete entity[michal];
            entity = undefined;
            return entity;
        }
    };
    michal['SURVEY_HIDE'] = verify;
    verify = function(argFoo) { // Original name: handleSurveyOverride
        _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.id;
            entity = _closure1_slot18;
            entity['surveyOverride'] = zuuluu;
            entity = null;
            if(!(entity != zuuluu)) { _fun00028_ip = 41; continue _fun00027 }
 27:
            entity = _closure1_slot18;
            entity = entity.hiddenSurveys;
            entity = delete entity[zuuluu];
 41:
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot3;
            entity = 11;
            zuuluu = zuuluu[entity];
            entity = undefined;
            report = tangon.bind(entity)(zuuluu);
            tangon = report.surveyFetch;
            michal = _closure1_slot18;
            zuuluu = michal.surveyOverride;
            michal = true;
            michal = tangon.bind(report)(zuuluu, michal);
            return entity;
        }
    };
    michal['SURVEY_OVERRIDE'] = verify;
    verify = function() { // Original name: handlePushNotificationClick
        entity = true;
        _closure1_slot19 = entity;
        entity = undefined;
        return entity;
    };
    michal['PUSH_NOTIFICATION_CLICK'] = verify;
    verify = function() { // Original name: handleInviteShow
        entity = true;
        _closure1_slot20 = entity;
        entity = undefined;
        return entity;
    };
    michal['DISPLAYED_INVITE_SHOW'] = verify;
    verify = function() { // Original name: handleLogout
        michal = _closure1_slot18;
        entity = {};
        michal['hiddenSurveys'] = entity;
        entity = undefined;
        return entity;
    };
    michal['LOGOUT'] = verify;
    tangon = function() { // Original name: handleSurveySeen
        michal = _closure1_slot18;
        entity = global;
        zuuluu = entity.Date;
        entity = zuuluu.now;
        entity = entity.bind(zuuluu)();
        michal['lastSeen'] = entity;
        entity = undefined;
        return entity;
    };
    michal['SURVEY_SEEN'] = tangon;
    tangon = option.prototype;
    tangon = Object.create(tangon, {constructor: {value: option}});
    kiloes = tangon;
    foxtra = michal;
    michal = new kiloes[option](backup, foxtra, romeon);
    michal = michal instanceof Object ? michal : tangon;
    tangon = 17;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'stores/SurveyStore.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    michal = 86400000;
    zuuluu['SURVEY_REFETCH_INTERVAL'] = michal;
    return entity;
})();