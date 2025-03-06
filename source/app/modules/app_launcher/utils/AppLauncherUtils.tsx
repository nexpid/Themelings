// app/modules/app_launcher/utils/AppLauncherUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    verify = argBar;
    option = argBaz;
    zuuluu = argFre;
    offset = argPlu;
    var _closure1_slot0 = verify;
    var _closure1_slot1 = option;
    var _closure1_slot2 = offset;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            var _closure2_slot0 = zuuluu;
            report = global;
            michal = report.Symbol;
            tangon = 'undefined';
            michal = typeof michal;
            michal = tangon !== michal;
            if(!michal) { _fun00002_ip = 45; continue _fun00001 }
 30:
            tangon = report.Symbol;
            tangon = tangon.iterator;
            michal = zuuluu[tangon];
 45:
            if(michal) { _fun00002_ip = 54; continue _fun00001 }
 48:
            michal = zuuluu.@@iterator;
 54:
            if(michal) { _fun00002_ip = 342; continue _fun00001 }
 60:
            oscard = report.Array;
            tangon = oscard.isArray;
            oscard = tangon.bind(oscard)(zuuluu);
            tangon = michal;
            if(oscard) { _fun00002_ip = 322; continue _fun00001 }
 85:
            option = undefined;
            oscard = undefined;
            if(!zuuluu) { _fun00002_ip = 282; continue _fun00001 }
 95:
            verify = 'string';
            golfie = typeof zuuluu;
            if(!(verify !== golfie)) { _fun00002_ip = 269; continue _fun00001 }
 109:
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
            if(!golfie) { _fun00002_ip = 162; continue _fun00001 }
 157:
            golfie = zuuluu.constructor;
 162:
            offset = verify;
            if(!golfie) { _fun00002_ip = 178; continue _fun00001 }
 168:
            golfie = zuuluu.constructor;
            offset = golfie.name;
 178:
            golfie = 'Map';
            if(!(golfie !== offset)) { _fun00002_ip = 248; continue _fun00001 }
 186:
            golfie = 'Set';
            if(!(golfie !== offset)) { _fun00002_ip = 248; continue _fun00001 }
 194:
            golfie = 'Arguments';
            if(!(golfie !== offset)) { _fun00002_ip = 233; continue _fun00001 }
 204:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golfie = verify.test;
            verify = golfie.bind(verify)(offset);
            golfie = undefined;
            if(!verify) { _fun00002_ip = 246; continue _fun00001 }
 233:
            verify = _closure1_slot12;
            golfie = verify.bind(option)(zuuluu, option);
 246:
            _fun00002_ip = 264; continue _fun00001;
 248:
            offset = report.Array;
            verify = offset.from;
            golfie = verify.bind(offset)(zuuluu);
 264:
            oscard = golfie;
            _fun00002_ip = 282; continue _fun00001;
 269:
            golfie = _closure1_slot12;
            oscard = golfie.bind(option)(zuuluu, option);
 282:
            tangon = oscard;
            if(tangon) { _fun00002_ip = 322; continue _fun00001 }
 288:
            golfie = report.TypeError;
            report = golfie.prototype;
            oscard = Object.create(report, {constructor: {value: golfie}});
            foxtra = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            backup = oscard;
            report = new backup[golfie](foxtra, romeon);
            report = report instanceof Object ? report : oscard;
            throw report;
 322:
            if(!tangon) { _fun00002_ip = 329; continue _fun00001 }
 325:
            _closure2_slot0 = tangon;
 329:
            tangon = 0;
            var _closure2_slot1 = tangon;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    michal = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(michal >= entity))) { _fun00004_ip = 56; continue _fun00003 }
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
                    _fun00004_ip = 67; continue _fun00003;
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
 342:
            entity = michal.call;
            zuuluu = entity.bind(michal)(zuuluu);
            michal = zuuluu.next;
            entity = michal.bind;
            entity = entity.bind(michal)(zuuluu);
            return entity;
        }
    };
    var _closure1_slot11 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tangon = argFoo;
            entity = null;
            zuuluu = undefined;
            entity = entity == zuuluu;
            if(entity) { _fun00006_ip = 23; continue _fun00005 }
 14:
            michal = tangon.length;
            entity = zuuluu > michal;
 23:
            michal = undefined;
            if(!entity) { _fun00006_ip = 33; continue _fun00005 }
 28:
            michal = tangon.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zuuluu)(michal);
            zuuluu = 0;
            report = zuuluu < michal;
            if(!report) { _fun00006_ip = 70; continue _fun00005 }
 55:
            report = tangon[zuuluu];
            entity[zuuluu] = report;
            zuuluu = zuuluu + 1;
            if(zuuluu < michal) { _fun00006_ip = 55; continue _fun00005 }
 70:
            return entity;
        }
    };
    var _closure1_slot12 = entity;
    oscard = function(argFoo) { // Original name: isRealApplication
        entity = argFoo;
        michal = entity.id;
        entity = _closure1_slot10;
        entity = entity.BUILT_IN;
        entity = michal !== entity;
        return entity;
    };
    var _closure1_slot13 = oscard;
    report = function(argFoo) { // Original name: isEmbeddedApp
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            zuuluu = argFoo;
            entity = _closure1_slot13;
            oscard = undefined;
            entity = entity.bind(oscard)(zuuluu);
            if(!entity) { _fun00008_ip = 81; continue _fun00007 }
 20:
            report = _closure1_slot0;
            golfie = _closure1_slot2;
            tangon = 7;
            tangon = golfie[tangon];
            report = report.bind(oscard)(tangon);
            tangon = report.hasFlag;
            oscard = zuuluu.flags;
            zuuluu = null;
            golfie = zuuluu != oscard;
            zuuluu = 0;
            if(!golfie) { _fun00008_ip = 65; continue _fun00007 }
 62:
            zuuluu = oscard;
 65:
            michal = _closure1_slot8;
            michal = michal.EMBEDDED;
            entity = tangon.bind(report)(zuuluu, michal);
 81:
            return entity;
        }
    };
    var _closure1_slot14 = report;
    tangon = function(argFoo) { // Original name: getEmbeddedActivityConfig
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            zuuluu = argFoo;
            entity = _closure1_slot13;
            oscard = undefined;
            tangon = entity.bind(oscard)(zuuluu);
            entity = null;
            if(!tangon) { _fun00010_ip = 64; continue _fun00009 }
 22:
            tangon = _closure1_slot14;
            tangon = tangon.bind(oscard)(zuuluu);
            entity = null;
            if(!tangon) { _fun00010_ip = 64; continue _fun00009 }
 36:
            michal = _closure1_slot6;
            michal = zuuluu instanceof michal;
            if(michal) { _fun00010_ip = 55; continue _fun00009 }
 47:
            michal = zuuluu.embedded_activity_config;
            _fun00010_ip = 61; continue _fun00009;
 55:
            michal = zuuluu.embeddedActivityConfig;
 61:
            entity = michal;
 64:
            return entity;
        }
    };
    var _closure1_slot15 = tangon;
    entity = ['fakeAppIconURL'];
    var _closure1_slot3 = entity;
    entity = global;
    romeon = entity.Object;
    yankee = romeon.defineProperty;
    golfie = {};
    entity = true;
    golfie['value'] = entity;
    entity = '__esModule';
    entity = yankee.bind(romeon)(zuuluu, entity, golfie);
    entity = 0;
    golfie = offset[entity];
    entity = undefined;
    golfie = option.bind(entity)(golfie);
    var _closure1_slot4 = golfie;
    golfie = 1;
    golfie = offset[golfie];
    golfie = option.bind(entity)(golfie);
    var _closure1_slot5 = golfie;
    golfie = 2;
    golfie = offset[golfie];
    golfie = option.bind(entity)(golfie);
    var _closure1_slot6 = golfie;
    golfie = 3;
    golfie = offset[golfie];
    golfie = option.bind(entity)(golfie);
    var _closure1_slot7 = golfie;
    golfie = 4;
    golfie = offset[golfie];
    golfie = verify.bind(entity)(golfie);
    option = golfie.ApplicationFlags;
    var _closure1_slot8 = option;
    golfie = golfie.ComponentActions;
    var _closure1_slot9 = golfie;
    golfie = 5;
    golfie = offset[golfie];
    golfie = verify.bind(entity)(golfie);
    option = golfie.BuiltInSectionId;
    var _closure1_slot10 = option;
    golfie = {};
    option = option.BUILT_IN;
    golfie['id'] = option;
    option = 19;
    option = offset[option];
    offset = verify.bind(entity)(option);
    verify = offset.fileFinishedImporting;
    option = 'modules/app_launcher/utils/AppLauncherUtils.tsx';
    option = verify.bind(offset)(option);
    zuuluu['FAKE_BUILT_IN_APP'] = golfie;
    zuuluu['isRealApplication'] = oscard;
    oscard = function(argFoo) { // Original name: getSectionName
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            michal = argFoo;
            zuuluu = _closure1_slot13;
            oscard = undefined;
            zuuluu = zuuluu.bind(oscard)(michal);
            if(zuuluu) { _fun00012_ip = 77; continue _fun00011 }
 20:
            report = _closure1_slot0;
            golfie = _closure1_slot2;
            entity = 6;
            zuuluu = golfie[entity];
            zuuluu = report.bind(oscard)(zuuluu);
            tangon = zuuluu.intl;
            zuuluu = tangon.string;
            entity = golfie[entity];
            entity = report.bind(oscard)(entity);
            entity = entity.t;
            entity = entity.UB2gGx;
            entity = zuuluu.bind(tangon)(entity);
            _fun00012_ip = 82; continue _fun00011;
 77:
            entity = michal.name;
 82:
            return entity;
        }
    };
    zuuluu['getSectionName'] = oscard;
    oscard = function(argFoo) { // Original name: getSectionDescription
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            michal = argFoo;
            zuuluu = _closure1_slot13;
            oscard = undefined;
            zuuluu = zuuluu.bind(oscard)(michal);
            if(zuuluu) { _fun00014_ip = 77; continue _fun00013 }
 20:
            report = _closure1_slot0;
            golfie = _closure1_slot2;
            entity = 6;
            zuuluu = golfie[entity];
            zuuluu = report.bind(oscard)(zuuluu);
            tangon = zuuluu.intl;
            zuuluu = tangon.string;
            entity = golfie[entity];
            entity = report.bind(oscard)(entity);
            entity = entity.t;
            entity = entity.X9fusr;
            entity = zuuluu.bind(tangon)(entity);
            _fun00014_ip = 82; continue _fun00013;
 77:
            entity = michal.description;
 82:
            return entity;
        }
    };
    zuuluu['getSectionDescription'] = oscard;
    zuuluu['isEmbeddedApp'] = report;
    report = function(argFoo) { // Original name: isPartnerApplication
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            zuuluu = argFoo;
            entity = _closure1_slot13;
            oscard = undefined;
            entity = entity.bind(oscard)(zuuluu);
            if(!entity) { _fun00016_ip = 81; continue _fun00015 }
 20:
            report = _closure1_slot0;
            golfie = _closure1_slot2;
            tangon = 7;
            tangon = golfie[tangon];
            report = report.bind(oscard)(tangon);
            tangon = report.hasFlag;
            oscard = zuuluu.flags;
            zuuluu = null;
            golfie = zuuluu != oscard;
            zuuluu = 0;
            if(!golfie) { _fun00016_ip = 65; continue _fun00015 }
 62:
            zuuluu = oscard;
 65:
            michal = _closure1_slot8;
            michal = michal.PARTNER;
            entity = tangon.bind(report)(zuuluu, michal);
 81:
            return entity;
        }
    };
    zuuluu['isPartnerApplication'] = report;
    report = function(argFoo) { // Original name: isPromotedApplication
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            zuuluu = argFoo;
            entity = _closure1_slot13;
            oscard = undefined;
            entity = entity.bind(oscard)(zuuluu);
            if(!entity) { _fun00018_ip = 81; continue _fun00017 }
 20:
            report = _closure1_slot0;
            golfie = _closure1_slot2;
            tangon = 7;
            tangon = golfie[tangon];
            report = report.bind(oscard)(tangon);
            tangon = report.hasFlag;
            oscard = zuuluu.flags;
            zuuluu = null;
            golfie = zuuluu != oscard;
            zuuluu = 0;
            if(!golfie) { _fun00018_ip = 65; continue _fun00017 }
 62:
            zuuluu = oscard;
 65:
            michal = _closure1_slot8;
            michal = michal.PROMOTED;
            entity = tangon.bind(report)(zuuluu, michal);
 81:
            return entity;
        }
    };
    zuuluu['isPromotedApplication'] = report;
    report = function(argFoo) { // Original name: getShelfBadgeTypeIfActive
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            tangon = _closure1_slot15;
            zuuluu = undefined;
            michal = argFoo;
            report = tangon.bind(zuuluu)(michal);
            tangon = null;
            oscard = tangon == report;
            michal = undefined;
            if(oscard) { _fun00020_ip = 89; continue _fun00019 }
 28:
            report = report.client_platform_config;
            golfie = _closure1_slot1;
            option = _closure1_slot2;
            oscard = 8;
            oscard = option[oscard];
            oscard = golfie.bind(zuuluu)(oscard);
            golfie = _closure1_slot0;
            entity = 9;
            entity = option[entity];
            golfie = golfie.bind(zuuluu)(entity);
            entity = golfie.getOS;
            entity = entity.bind(golfie)();
            entity = oscard.bind(zuuluu)(entity);
            michal = report[entity];
 89:
            report = tangon == michal;
            entity = undefined;
            if(report) { _fun00020_ip = 104; continue _fun00019 }
 98:
            entity = michal.label_until;
 104:
            report = tangon != entity;
            entity = null;
            if(!report) { _fun00020_ip = 177; continue _fun00019 }
 113:
            oscard = global;
            golfie = oscard.Date;
            report = golfie.now;
            report = report.bind(golfie)();
            golfie = oscard.Date;
            oscard = golfie.parse;
            option = tangon == michal;
            zuuluu = undefined;
            if(option) { _fun00020_ip = 157; continue _fun00019 }
 151:
            zuuluu = michal.label_until;
 157:
            zuuluu = oscard.bind(golfie)(zuuluu);
            zuuluu = report < zuuluu;
            entity = null;
            if(!zuuluu) { _fun00020_ip = 177; continue _fun00019 }
 171:
            entity = michal.label_type;
 177:
            return entity;
        }
    };
    zuuluu['getShelfBadgeTypeIfActive'] = report;
    zuuluu['getEmbeddedActivityConfig'] = tangon;
    tangon = function(argFoo) { // Original name: executeAppLauncherCommand
        _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
            michal = argFoo;
            entity = michal.command;
            var _closure2_slot0 = entity;
            entity = michal.optionValues;
            var _closure2_slot1 = entity;
            entity = michal.context;
            var _closure2_slot2 = entity;
            tangon = michal.commandTargetId;
            var _closure2_slot3 = tangon;
            tangon = michal.maxSizeCallback;
            var _closure2_slot4 = tangon;
            tangon = michal.sectionName;
            var _closure2_slot5 = tangon;
            tangon = michal.commandOrigin;
            michal = undefined;
            if(!(tangon === michal)) { _fun00022_ip = 111; continue _fun00021 }
 76:
            oscard = _closure1_slot0;
            golfie = _closure1_slot2;
            report = 10;
            report = golfie[report];
            report = oscard.bind(michal)(report);
            report = report.CommandOrigin;
            tangon = report.APPLICATION_LAUNCHER;
 111:
            var _closure2_slot6 = tangon;
            var _closure2_slot7 = michal;
            var _closure2_slot8 = michal;
            entity = entity.channel;
            _closure2_slot7 = entity;
            entity = function() {
                tangon = _closure1_slot5;
                zuuluu = undefined;
                michal = function* () {
                    entity = function* () { // Original name: ?anon_0_
                        _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(michal) { _fun00024_ip = 559; continue _fun00023 }
 10:
                            offset = undefined;
                            oscard = undefined;
                            option = undefined;
                            zuuluu = undefined;
 18: // try_start_0
                            tangon = _closure1_slot1;
                            golfie = _closure1_slot2;
                            michal = 11;
                            michal = golfie[michal];
                            golfie = tangon.bind(offset)(michal);
                            michal = {};
                            verify = _closure2_slot0;
                            michal['command'] = verify;
                            verify = _closure2_slot1;
                            michal['optionValues'] = verify;
                            verify = _closure2_slot2;
                            michal['context'] = verify;
                            verify = _closure2_slot3;
                            michal['commandTargetId'] = verify;
                            verify = _closure2_slot4;
                            michal['maxSizeCallback'] = verify;
                            verify = _closure2_slot6;
                            michal['commandOrigin'] = verify;
                            verify = _closure2_slot5;
                            michal['sectionName'] = verify;
                            yankee = _closure1_slot7;
                            verify = yankee.entrypoint;
                            verify = verify.bind(yankee)();
                            michal['source'] = verify;
                            michal = golfie.bind(offset)(michal);
                            SaveGenerator(address=135);
 133:
                            return michal;
 135:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=6);
                            if(golfie) { _fun00024_ip = 348; continue _fun00023 }
 144:
                            oscard = michal;
                            golfie = _closure2_slot0;
                            verify = golfie.inputType;
                            yankee = _closure1_slot0;
                            romeon = _closure1_slot2;
                            golfie = 10;
                            golfie = romeon[golfie];
                            golfie = yankee.bind(offset)(golfie);
                            golfie = golfie.ApplicationCommandInputType;
                            golfie = golfie.BUILT_IN_TEXT;
                            if(!(verify === golfie)) { _fun00024_ip = 345; continue _fun00023 }
 196:
                            golfie = oscard;
                            yankee = null;
                            if(!(yankee != golfie)) { _fun00024_ip = 345; continue _fun00023 }
 208:
                            golfie = _closure2_slot2;
                            golfie = golfie.channel;
                            if(!(yankee != golfie)) { _fun00024_ip = 345; continue _fun00023 }
 224:
                            verify = _closure1_slot1;
                            romeon = _closure1_slot2;
                            golfie = 12;
                            golfie = romeon[golfie];
                            foxtra = verify.bind(offset)(golfie);
                            romeon = foxtra.parse;
                            golfie = _closure2_slot7;
                            verify = oscard;
                            oscard = verify.content;
                            golfie = romeon.bind(foxtra)(golfie, oscard);
                            zuuluu = golfie;
                            verify = verify.tts;
                            option = verify;
                            verify = yankee != verify;
                            oscard = verify;
                            if(!verify) { _fun00024_ip = 293; continue _fun00023 }
 290:
                            oscard = option;
 293:
                            golfie['tts'] = oscard;
                            oscard = _closure1_slot1;
                            golfie = _closure1_slot2;
                            report = 13;
                            report = golfie[report];
                            oscard = oscard.bind(offset)(report);
                            report = oscard.sendMessage;
                            tangon = _closure2_slot2;
                            tangon = tangon.channel;
                            tangon = tangon.id;
                            zuuluu = report.bind(oscard)(tangon, zuuluu);
 345: // try_end0
                            return offset;
 348:
                            return michal;
 351: // catch_target0
                            CatchBlockStart(arg_register=1);
                            tangon = _closure1_slot1;
                            yankee = _closure1_slot2;
                            zuuluu = 14;
                            zuuluu = yankee[zuuluu];
                            report = tangon.bind(offset)(zuuluu);
                            tangon = report.show;
                            zuuluu = {};
                            verify = _closure1_slot0;
                            oscard = 6;
                            golfie = yankee[oscard];
                            golfie = verify.bind(offset)(golfie);
                            romeon = golfie.intl;
                            option = romeon.string;
                            golfie = yankee[oscard];
                            golfie = verify.bind(offset)(golfie);
                            golfie = golfie.t;
                            golfie = golfie.aHO//v;
                            golfie = option.bind(romeon)(golfie);
                            zuuluu['title'] = golfie;
                            golfie = yankee[oscard];
                            golfie = verify.bind(offset)(golfie);
                            romeon = golfie.intl;
                            option = romeon.string;
                            golfie = yankee[oscard];
                            golfie = verify.bind(offset)(golfie);
                            golfie = golfie.t;
                            golfie = golfie.kuzKHB;
                            golfie = option.bind(romeon)(golfie);
                            zuuluu['body'] = golfie;
                            golfie = yankee[oscard];
                            golfie = verify.bind(offset)(golfie);
                            option = golfie.intl;
                            golfie = option.string;
                            oscard = yankee[oscard];
                            oscard = verify.bind(offset)(oscard);
                            oscard = oscard.t;
                            oscard = oscard.5911LS;
                            oscard = golfie.bind(option)(oscard);
                            zuuluu['confirmText'] = oscard;
                            oscard = function() { // Original name: onConfirm
                                michal = _closure2_slot8;
                                entity = undefined;
                                entity = michal.bind(entity)();
                                return entity;
                            };
                            zuuluu['onConfirm'] = oscard;
                            zuuluu = tangon.bind(report)(zuuluu);
                            throw michal;
 559:
                            return entity;
                        }
                    };
                    return entity;
                };
                michal = tangon.bind(zuuluu)(michal);
                var _closure3_slot0 = michal;
                entity = function() {
                    entity = undefined;
                    tangon = _closure3_slot0;
                    zuuluu = tangon.apply;
                    entity = arguments;
                    michal = entity;
                    entity = this;
                    entity = zuuluu.bind(tangon)(entity, michal);
                    return entity;
                };
                return entity;
            };
            entity = entity.bind(michal)();
            _closure2_slot8 = entity;
            entity = entity.bind(michal)();
            return entity;
        }
    };
    zuuluu['executeAppLauncherCommand'] = tangon;
    tangon = function(argFoo) { // Original name: getApplicationDetails
        _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
            zuuluu = argFoo;
            golfie = arguments[1];
            oscard = undefined;
            if(!(golfie === oscard)) { _fun00026_ip = 14; continue _fun00025 }
 12:
            golfie = {};
 14:
            report = golfie.fakeAppIconURL;
            michal = _closure1_slot4;
            entity = _closure1_slot3;
            golfie = michal.bind(oscard)(golfie, entity);
            entity = _closure1_slot13;
            entity = entity.bind(oscard)(zuuluu);
            michal = {};
            if(entity) { _fun00026_ip = 185; continue _fun00025 }
 56:
            entity = null;
            option = entity != report;
            if(!option) { _fun00026_ip = 68; continue _fun00025 }
 65:
            entity = report;
 68:
            michal['iconURL'] = entity;
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            entity = 6;
            report = offset[entity];
            report = verify.bind(oscard)(report);
            yankee = report.intl;
            option = yankee.string;
            report = offset[entity];
            report = verify.bind(oscard)(report);
            report = report.t;
            report = report.UB2gGx;
            report = option.bind(yankee)(report);
            michal['name'] = report;
            report = offset[entity];
            report = verify.bind(oscard)(report);
            option = report.intl;
            report = option.string;
            entity = offset[entity];
            entity = verify.bind(oscard)(entity);
            entity = entity.t;
            entity = entity.X9fusr;
            entity = report.bind(option)(entity);
            michal['description'] = entity;
            entity = michal;
            _fun00026_ip = 282; continue _fun00025;
 185:
            report = _closure1_slot1;
            option = _closure1_slot2;
            tangon = 15;
            tangon = option[tangon];
            oscard = report.bind(oscard)(tangon);
            report = oscard.getApplicationIconURL;
            tangon = {};
            foxtra = tangon;
            romeon = golfie;
            golfie = copyDataProperties(foxtra, romeon);
            option = zuuluu.id;
            golfie = 'id';
            tangon[golfie] = option;
            option = zuuluu.icon;
            golfie = 'icon';
            tangon[golfie] = option;
            tangon = report.bind(oscard)(tangon);
            michal['iconURL'] = tangon;
            tangon = zuuluu.name;
            michal['name'] = tangon;
            zuuluu = zuuluu.description;
            michal['description'] = zuuluu;
            entity = michal;
 282:
            return entity;
        }
    };
    zuuluu['getApplicationDetails'] = tangon;
    tangon = function(argFoo) { // Original name: isApplicationMonetizedWithIAP
        _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
            zuuluu = argFoo;
            tangon = _closure1_slot13;
            entity = undefined;
            tangon = tangon.bind(entity)(zuuluu);
            entity = !tangon;
            entity = !entity;
            if(!tangon) { _fun00028_ip = 54; continue _fun00027 }
 26:
            michal = _closure1_slot6;
            michal = zuuluu instanceof michal;
            if(michal) { _fun00028_ip = 45; continue _fun00027 }
 37:
            michal = zuuluu.is_monetized;
            _fun00028_ip = 51; continue _fun00027;
 45:
            michal = zuuluu.isMonetized;
 51:
            entity = michal;
 54:
            return entity;
        }
    };
    zuuluu['isApplicationMonetizedWithIAP'] = tangon;
    tangon = function(argFoo) { // Original name: isApplicationAdSupported
        _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
            zuuluu = _closure1_slot15;
            michal = undefined;
            entity = argFoo;
            michal = zuuluu.bind(michal)(entity);
            entity = null;
            entity = entity != michal;
            if(!entity) { _fun00030_ip = 32; continue _fun00029 }
 26:
            entity = michal.displays_advertisements;
 32:
            return entity;
        }
    };
    zuuluu['isApplicationAdSupported'] = tangon;
    tangon = function(argFoo) { // Original name: appLauncherShowsRecommendations
        zuuluu = _closure1_slot0;
        michal = _closure1_slot2;
        entity = 16;
        michal = michal[entity];
        entity = undefined;
        entity = zuuluu.bind(entity)(michal);
        entity = entity.AppLauncherEntrypoint;
        michal = entity.TEXT;
        entity = argFoo;
        entity = entity === michal;
        return entity;
    };
    zuuluu['appLauncherShowsRecommendations'] = tangon;
    tangon = function(argFoo) { // Original name: formatPrimaryEntryPointCommandName
        _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
            report = argFoo;
            entity = null;
            michal = entity == report;
            entity = '';
            if(michal) { _fun00032_ip = 76; continue _fun00031 }
 16:
            zuuluu = report.charAt;
            michal = 0;
            zuuluu = zuuluu.bind(report)(michal);
            michal = zuuluu.toLocaleUpperCase;
            zuuluu = michal.bind(zuuluu)();
            tangon = report.slice;
            michal = 1;
            michal = tangon.bind(report)(michal);
            report = zuuluu + michal;
            tangon = report.replaceAll;
            zuuluu = '_';
            michal = ' ';
            entity = tangon.bind(report)(zuuluu, michal);
 76:
            return entity;
        }
    };
    zuuluu['formatPrimaryEntryPointCommandName'] = tangon;
    tangon = function(argFoo) { // Original name: ensureRecommendationSectionsOnlyContainActivities
        _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
            entity = new Array(0);
            zuuluu = _closure1_slot11;
            golfie = undefined;
            michal = argFoo;
            oscard = zuuluu.bind(golfie)(michal);
            zuuluu = oscard.bind(golfie)();
            michal = zuuluu.done;
            report = 'application_directory_collection_items';
            tangon = 0;
            if(michal) { _fun00034_ip = 118; continue _fun00033 }
 41:
            yankee = zuuluu.value;
            offset = yankee.application_directory_collection_items;
            verify = offset.filter;
            michal = function(argFoo) {
                _fun00035: for(var _fun00036_ip = 0; ; ) switch(_fun00036_ip) {
 0:
                    michal = argFoo;
                    report = michal.type;
                    oscard = _closure1_slot0;
                    tangon = _closure1_slot2;
                    entity = 17;
                    entity = tangon[entity];
                    tangon = undefined;
                    entity = oscard.bind(tangon)(entity);
                    entity = entity.ApplicationDirectoryCollectionItemType;
                    entity = entity.APPLICATION;
                    entity = report === entity;
                    if(!entity) { _fun00036_ip = 66; continue _fun00035 }
 52:
                    zuuluu = _closure1_slot14;
                    michal = michal.application;
                    entity = zuuluu.bind(tangon)(michal);
 66:
                    return entity;
                }
            };
            offset = verify.bind(offset)(michal);
            michal = offset.length;
            if(!(tangon !== michal)) { _fun00034_ip = 103; continue _fun00033 }
 76:
            verify = entity.push;
            michal = {};
            foxtra = michal;
            romeon = yankee;
            yankee = copyDataProperties(foxtra, romeon);
            michal[report] = offset;
            michal = verify.bind(entity)(michal);
 103:
            verify = oscard.bind(golfie)();
            michal = verify.done;
            zuuluu = verify;
            if(!michal) { _fun00034_ip = 41; continue _fun00033 }
 118:
            return entity;
        }
    };
    zuuluu['ensureRecommendationSectionsOnlyContainActivities'] = tangon;
    tangon = function(argFoo) { // Original name: getInstallAppPropsFromProfileApplication
        michal = argFoo;
        entity = {};
        zuuluu = michal.id;
        entity['applicationId'] = zuuluu;
        zuuluu = michal.customInstallUrl;
        entity['customInstallUrl'] = zuuluu;
        zuuluu = michal.installParams;
        entity['installParams'] = zuuluu;
        michal = michal.integrationTypesConfig;
        entity['integrationTypesConfig'] = michal;
        return entity;
    };
    zuuluu['getInstallAppPropsFromProfileApplication'] = tangon;
    tangon = function(argFoo) { // Original name: getInstallAppProps
        _fun00037: for(var _fun00038_ip = 0; ; ) switch(_fun00038_ip) {
 0:
            zuuluu = argFoo;
            entity = _closure1_slot6;
            entity = zuuluu instanceof entity;
            michal = {};
            tangon = zuuluu.id;
            michal['applicationId'] = tangon;
            if(entity) { _fun00038_ip = 66; continue _fun00037 }
 28:
            entity = zuuluu.custom_install_url;
            michal['customInstallUrl'] = entity;
            entity = zuuluu.install_params;
            michal['installParams'] = entity;
            entity = zuuluu.integration_types_config;
            michal['integrationTypesConfig'] = entity;
            entity = michal;
            _fun00038_ip = 102; continue _fun00037;
 66:
            tangon = zuuluu.customInstallUrl;
            michal['customInstallUrl'] = tangon;
            tangon = zuuluu.installParams;
            michal['installParams'] = tangon;
            zuuluu = zuuluu.integrationTypesConfig;
            michal['integrationTypesConfig'] = zuuluu;
            entity = michal;
 102:
            return entity;
        }
    };
    zuuluu['getInstallAppProps'] = tangon;
    michal = function(argFoo) { // Original name: openAppLauncherDetail
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot2;
        entity = 18;
        zuuluu = zuuluu[entity];
        entity = undefined;
        zuuluu = tangon.bind(entity)(zuuluu);
        report = zuuluu.ComponentDispatch;
        tangon = report.dispatchToLastSubscribed;
        michal = _closure1_slot9;
        zuuluu = michal.OPEN_APP_LAUNCHER;
        michal = {};
        oscard = argFoo;
        michal['applicationId'] = oscard;
        michal = tangon.bind(report)(zuuluu, michal);
        return entity;
    };
    zuuluu['openAppLauncherDetail'] = michal;
    return entity;
})();