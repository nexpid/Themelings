// app/modules/guild_settings/GuildSettingsRolesStore.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    option = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = option;
    entity = argCor;
    var _closure1_slot2 = entity;
    var _closure1_slot3 = oscard;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            oscard = argBaz;
            michal = _closure1_slot7;
            zuuluu = undefined;
            entity = argBar;
            verify = michal.bind(zuuluu)(entity);
            michal = _closure1_slot6;
            entity = _closure1_slot30;
            entity = entity.bind(zuuluu)();
            if(entity) { _fun00002_ip = 51; continue _fun00001 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tangon, oscard);
            _fun00002_ip = 92; continue _fun00001;
 51:
            golfie = global;
            option = golfie.Reflect;
            golfie = option.construct;
            if(oscard) { _fun00002_ip = 71; continue _fun00001 }
 67:
            oscard = new Array(0);
 71:
            report = _closure1_slot7;
            report = report.bind(zuuluu)(tangon);
            report = report.constructor;
            entity = golfie.bind(option)(verify, oscard, report);
 92:
            entity = michal.bind(zuuluu)(tangon, entity);
            return entity;
        }
    };
    var _closure1_slot29 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
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
            _fun00004_ip = 76; continue _fun00003;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            michal = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot30 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot30 = entity;
    entity = function() { // Original name: calculatePositionDeltas
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = _closure1_slot14;
            michal = null;
            if(!(michal != entity)) { _fun00006_ip = 198; continue _fun00005 }
 18:
            entity = _closure1_slot21;
            if(!(michal != entity)) { _fun00006_ip = 198; continue _fun00005 }
 29:
            zuuluu = _closure1_slot1;
            golfie = _closure1_slot3;
            entity = 9;
            entity = golfie[entity];
            michal = undefined;
            oscard = zuuluu.bind(michal)(entity);
            verify = _closure1_slot10;
            option = verify.getRoles;
            entity = _closure1_slot14;
            entity = entity.id;
            entity = option.bind(verify)(entity);
            oscard = oscard.bind(michal)(entity);
            entity = oscard.values;
            option = entity.bind(oscard)();
            oscard = option.sortBy;
            entity = function(argFoo) {
                entity = argFoo;
                entity = entity.position;
                return entity;
            };
            oscard = oscard.bind(option)(entity);
            entity = oscard.reverse;
            oscard = entity.bind(oscard)();
            entity = oscard.value;
            oscard = entity.bind(oscard)();
            entity = 10;
            entity = golfie[entity];
            zuuluu = zuuluu.bind(michal)(entity);
            michal = zuuluu.calculatePositionDeltas;
            entity = {};
            entity['oldOrdering'] = oscard;
            report = _closure1_slot21;
            entity['newOrdering'] = report;
            report = function(argFoo) { // Original name: idGetter
                entity = argFoo;
                entity = entity.id;
                return entity;
            };
            entity['idGetter'] = report;
            tangon = function(argFoo) { // Original name: existingPositionGetter
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    entity = argFoo;
                    michal = entity.originalPosition;
                    entity = null;
                    zuuluu = entity != michal;
                    entity = inf;
                    if(!zuuluu) { _fun00008_ip = 31; continue _fun00007 }
 28:
                    entity = michal;
 31:
                    return entity;
                }
            };
            entity['existingPositionGetter'] = tangon;
            tangon = false;
            entity['ascending'] = tangon;
            entity = michal.bind(zuuluu)(entity);
            return entity;
 198:
            entity = new Array(0);
            return entity;
        }
    };
    var _closure1_slot31 = entity;
    offset = function(argFoo) { // Original name: handleSetSection
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.section;
            tangon = _closure1_slot14;
            michal = null;
            if(!(michal == tangon)) { _fun00010_ip = 47; continue _fun00009 }
 21:
            michal = _closure1_slot12;
            michal = michal.ROLES;
            if(!(zuuluu === michal)) { _fun00010_ip = 47; continue _fun00009 }
 35:
            michal = _closure1_slot32;
            entity = undefined;
            michal = michal.bind(entity)();
            return entity;
 47:
            entity = false;
            return entity;
        }
    };
    entity = function() { // Original name: handleInit
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            tangon = arguments[0];
            entity = undefined;
            if(!(tangon === entity)) { _fun00012_ip = 13; continue _fun00011 }
 11:
            tangon = true;
 13:
            oscard = _closure1_slot11;
            report = oscard.getProps;
            report = report.bind(oscard)();
            report = report.guild;
            var _closure1_slot14 = report;
            report = false;
            _closure1_slot19 = report;
            _closure1_slot20 = report;
            var _closure1_slot16 = entity;
            golfie = _closure1_slot17;
            oscard = golfie.clear;
            oscard = oscard.bind(golfie)();
            oscard = _closure1_slot13;
            oscard = oscard.OPEN;
            _closure1_slot18 = oscard;
            golfie = _closure1_slot14;
            oscard = null;
            if(!(oscard == golfie)) { _fun00012_ip = 97; continue _fun00011 }
 91:
            option = new Array(0);
            _fun00012_ip = 192; continue _fun00011;
 97:
            golfie = _closure1_slot1;
            verify = _closure1_slot3;
            oscard = 9;
            oscard = verify[oscard];
            golfie = golfie.bind(entity)(oscard);
            offset = _closure1_slot10;
            verify = offset.getRoles;
            oscard = _closure1_slot14;
            oscard = oscard.id;
            oscard = verify.bind(offset)(oscard);
            golfie = golfie.bind(entity)(oscard);
            oscard = golfie.values;
            verify = oscard.bind(golfie)();
            golfie = verify.sortBy;
            oscard = function(argFoo) {
                entity = argFoo;
                entity = entity.position;
                return entity;
            };
            golfie = golfie.bind(verify)(oscard);
            oscard = golfie.reverse;
            golfie = oscard.bind(golfie)();
            oscard = golfie.value;
            option = oscard.bind(golfie)();
 192:
            _closure1_slot21 = option;
            oscard = new Array(0);
            yankee = 0;
            foxtra = oscard;
            romeon = option;
            golfie = arraySpread(foxtra, romeon, yankee);
            _closure1_slot22 = oscard;
            _closure1_slot23 = report;
            if(!tangon) { _fun00012_ip = 258; continue _fun00011 }
 223:
            report = _closure1_slot26;
            tangon = report.clear;
            tangon = tangon.bind(report)();
            tangon = _closure1_slot25;
            zuuluu = tangon.forEach;
            michal = function(argFoo, argBar) {
                tangon = _closure1_slot26;
                zuuluu = tangon.set;
                michal = new Array(0);
                golfie = argFoo;
                oscard = 0;
                option = michal;
                entity = arraySpread(option, golfie, oscard);
                entity = argBar;
                entity = zuuluu.bind(tangon)(entity, michal);
                entity = undefined;
                return entity;
            };
            michal = zuuluu.bind(tangon)(michal);
 258:
            return entity;
        }
    };
    var _closure1_slot32 = entity;
    entity = function(argFoo, argBar) { // Original name: updateRole
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            zuuluu = argFoo;
            tangon = _closure1_slot21;
            michal = tangon.indexOf;
            tangon = michal.bind(tangon)(zuuluu);
            report = 0;
            if(!(!(tangon < report))) { _fun00014_ip = 114; continue _fun00013 }
 26:
            michal = {};
            option = michal;
            golfie = zuuluu;
            zuuluu = copyDataProperties(option, golfie);
            golfie = argBar;
            option = michal;
            zuuluu = copyDataProperties(option, golfie);
            zuuluu = _closure1_slot21;
            zuuluu[tangon] = michal;
            golfie = _closure1_slot21;
            zuuluu = new Array(0);
            option = zuuluu;
            oscard = 0;
            tangon = arraySpread(option, golfie, oscard);
            _closure1_slot21 = zuuluu;
            zuuluu = true;
            _closure1_slot19 = zuuluu;
            tangon = _closure1_slot17;
            zuuluu = tangon.add;
            michal = michal.id;
            michal = zuuluu.bind(tangon)(michal);
            michal = _closure1_slot27;
            entity = undefined;
            michal = michal.bind(entity)();
            return entity;
 114:
            entity = false;
            return entity;
        }
    };
    var _closure1_slot33 = entity;
    entity = function(argFoo) { // Original name: _getRole
        michal = argFoo;
        var _closure2_slot0 = michal;
        zuuluu = _closure1_slot21;
        michal = zuuluu.find;
        entity = function(argFoo) {
            entity = argFoo;
            michal = entity.id;
            entity = _closure2_slot0;
            entity = michal === entity;
            return entity;
        };
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    var _closure1_slot34 = entity;
    golfie = function(argFoo) { // Original name: syncGuildChanges
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            entity = argFoo;
            report = entity.guildId;
            entity = undefined;
            var _closure2_slot0 = entity;
            tangon = _closure1_slot14;
            oscard = null;
            if(!(oscard != tangon)) { _fun00016_ip = 276; continue _fun00015 }
 32:
            tangon = _closure1_slot14;
            tangon = tangon.id;
            if(!(report === tangon)) { _fun00016_ip = 276; continue _fun00015 }
 48:
            report = _closure1_slot18;
            tangon = _closure1_slot13;
            tangon = tangon.SUBMITTING;
            if(!(report !== tangon)) { _fun00016_ip = 276; continue _fun00015 }
 69:
            report = _closure1_slot11;
            tangon = report.getProps;
            tangon = tangon.bind(report)();
            tangon = tangon.guild;
            _closure1_slot14 = tangon;
            report = new Array(0);
            _closure2_slot0 = report;
            if(!(oscard != tangon)) { _fun00016_ip = 206; continue _fun00015 }
 104:
            oscard = _closure1_slot1;
            golfie = _closure1_slot3;
            tangon = 9;
            tangon = golfie[tangon];
            oscard = oscard.bind(entity)(tangon);
            option = _closure1_slot10;
            golfie = option.getRoles;
            tangon = _closure1_slot14;
            tangon = tangon.id;
            tangon = golfie.bind(option)(tangon);
            oscard = oscard.bind(entity)(tangon);
            tangon = oscard.values;
            golfie = tangon.bind(oscard)();
            oscard = golfie.sortBy;
            tangon = function(argFoo) {
                entity = argFoo;
                entity = entity.position;
                return entity;
            };
            oscard = oscard.bind(golfie)(tangon);
            tangon = oscard.reverse;
            oscard = tangon.bind(oscard)();
            tangon = oscard.value;
            tangon = tangon.bind(oscard)();
            _closure2_slot0 = tangon;
            report = tangon;
 206:
            oscard = _closure1_slot17;
            tangon = oscard.forEach;
            michal = function(argFoo) {
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    tangon = argFoo;
                    var _closure3_slot0 = tangon;
                    report = _closure1_slot34;
                    entity = undefined;
                    oscard = report.bind(entity)(tangon);
                    report = -1;
                    var _closure3_slot1 = report;
                    verify = _closure2_slot0;
                    option = verify.find;
                    golfie = function(argFoo, argBar) {
                        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                            entity = argFoo;
                            zuuluu = entity.id;
                            entity = _closure3_slot0;
                            if(!(zuuluu !== entity)) { _fun00020_ip = 23; continue _fun00019 }
 19:
                            entity = undefined;
                            return entity;
 23:
                            entity = argBar;
                            _closure3_slot1 = entity;
                            entity = true;
                            return entity;
                        }
                    };
                    option = option.bind(verify)(golfie);
                    golfie = null;
                    if(!(golfie != option)) { _fun00018_ip = 81; continue _fun00017 }
 63:
                    if(!(golfie != oscard)) { _fun00018_ip = 81; continue _fun00017 }
 67:
                    report = _closure2_slot0;
                    zuuluu = _closure3_slot1;
                    report[zuuluu] = oscard;
                    _fun00018_ip = 95; continue _fun00017;
 81:
                    zuuluu = _closure1_slot17;
                    michal = zuuluu.delete;
                    michal = michal.bind(zuuluu)(tangon);
 95:
                    return entity;
                }
            };
            michal = tangon.bind(oscard)(michal);
            michal = _closure1_slot17;
            michal = michal.size;
            tangon = 0;
            if(!(tangon === michal)) { _fun00016_ip = 248; continue _fun00015 }
 242:
            michal = false;
            _closure1_slot19 = michal;
 248:
            michal = false;
            _closure1_slot20 = michal;
            michal = new Array(0);
            yankee = michal;
            offset = report;
            verify = 0;
            tangon = arraySpread(yankee, offset, verify);
            _closure1_slot21 = michal;
            return entity;
 276:
            entity = false;
            return entity;
        }
    };
    var _closure1_slot35 = golfie;
    michal = global;
    romeon = michal.Object;
    yankee = romeon.defineProperty;
    verify = {};
    entity = true;
    verify['value'] = entity;
    entity = '__esModule';
    entity = yankee.bind(romeon)(zuuluu, entity, verify);
    entity = 0;
    verify = oscard[entity];
    entity = undefined;
    verify = option.bind(entity)(verify);
    var _closure1_slot4 = verify;
    verify = 1;
    verify = oscard[verify];
    verify = option.bind(entity)(verify);
    var _closure1_slot5 = verify;
    verify = 2;
    verify = oscard[verify];
    verify = option.bind(entity)(verify);
    var _closure1_slot6 = verify;
    verify = 3;
    verify = oscard[verify];
    verify = option.bind(entity)(verify);
    var _closure1_slot7 = verify;
    verify = 4;
    verify = oscard[verify];
    verify = option.bind(entity)(verify);
    var _closure1_slot8 = verify;
    verify = 5;
    verify = oscard[verify];
    verify = option.bind(entity)(verify);
    var _closure1_slot9 = verify;
    verify = 6;
    verify = oscard[verify];
    verify = option.bind(entity)(verify);
    var _closure1_slot10 = verify;
    verify = 7;
    verify = oscard[verify];
    verify = option.bind(entity)(verify);
    var _closure1_slot11 = verify;
    verify = 8;
    verify = oscard[verify];
    verify = report.bind(entity)(verify);
    yankee = verify.GuildSettingsSections;
    var _closure1_slot12 = yankee;
    verify = verify.FormStates;
    var _closure1_slot13 = verify;
    yankee = michal.Set;
    romeon = yankee.prototype;
    romeon = Object.create(romeon, {constructor: {value: yankee}});
    sizing = romeon;
    yankee = new sizing[yankee](kiloes);
    yankee = yankee instanceof Object ? yankee : romeon;
    var _closure1_slot17 = yankee;
    verify = verify.CLOSED;
    var _closure1_slot18 = verify;
    verify = false;
    var _closure1_slot19 = verify;
    var _closure1_slot20 = verify;
    yankee = new Array(0);
    var _closure1_slot21 = yankee;
    yankee = new Array(0);
    var _closure1_slot22 = yankee;
    var _closure1_slot23 = verify;
    verify = michal.Set;
    yankee = verify.prototype;
    yankee = Object.create(yankee, {constructor: {value: verify}});
    sizing = yankee;
    verify = new sizing[verify](kiloes);
    verify = verify instanceof Object ? verify : yankee;
    var _closure1_slot24 = verify;
    verify = michal.Map;
    yankee = verify.prototype;
    yankee = Object.create(yankee, {constructor: {value: verify}});
    sizing = yankee;
    verify = new sizing[verify](kiloes);
    verify = verify instanceof Object ? verify : yankee;
    var _closure1_slot25 = verify;
    michal = michal.Map;
    verify = michal.prototype;
    verify = Object.create(verify, {constructor: {value: michal}});
    sizing = verify;
    michal = new sizing[michal](kiloes);
    michal = michal instanceof Object ? michal : verify;
    var _closure1_slot26 = michal;
    michal = 9;
    michal = oscard[michal];
    romeon = option.bind(entity)(michal);
    yankee = romeon.debounce;
    verify = function() {
        _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
            zuuluu = false;
            var _closure2_slot0 = zuuluu;
            tangon = _closure1_slot20;
            if(!tangon) { _fun00022_ip = 52; continue _fun00021 }
 18:
            report = _closure1_slot31;
            tangon = undefined;
            tangon = report.bind(tangon)();
            report = tangon.length;
            tangon = 0;
            tangon = report > tangon;
            _closure1_slot20 = tangon;
            if(tangon) { _fun00022_ip = 52; continue _fun00021 }
 46:
            tangon = true;
            _closure2_slot0 = tangon;
 52:
            offset = _closure1_slot17;
            golfie = new Array(0);
            report = 0;
            yankee = golfie;
            verify = 0;
            tangon = arraySpread(yankee, offset, verify);
            oscard = golfie.forEach;
            tangon = function(argFoo) {
                _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                    tangon = argFoo;
                    report = _closure1_slot1;
                    zuuluu = _closure1_slot3;
                    entity = 9;
                    zuuluu = zuuluu[entity];
                    entity = undefined;
                    golfie = report.bind(entity)(zuuluu);
                    oscard = golfie.isEqual;
                    zuuluu = _closure1_slot34;
                    report = zuuluu.bind(entity)(tangon);
                    zuuluu = function(argFoo) { // Original name: getOriginalRole
                        michal = argFoo;
                        var _closure4_slot0 = michal;
                        zuuluu = _closure1_slot22;
                        michal = zuuluu.find;
                        entity = function(argFoo) {
                            entity = argFoo;
                            michal = entity.id;
                            entity = _closure4_slot0;
                            entity = michal === entity;
                            return entity;
                        };
                        entity = michal.bind(zuuluu)(entity);
                        return entity;
                    };
                    zuuluu = zuuluu.bind(entity)(tangon);
                    zuuluu = oscard.bind(golfie)(report, zuuluu);
                    if(!zuuluu) { _fun00024_ip = 89; continue _fun00023 }
 66:
                    zuuluu = _closure1_slot17;
                    michal = zuuluu.delete;
                    michal = michal.bind(zuuluu)(tangon);
                    michal = true;
                    _closure2_slot0 = michal;
 89:
                    return entity;
                }
            };
            tangon = oscard.bind(golfie)(tangon);
            tangon = _closure1_slot17;
            tangon = tangon.size;
            if(!(report === tangon)) { _fun00022_ip = 105; continue _fun00021 }
 101:
            _closure1_slot19 = zuuluu;
 105:
            tangon = _closure1_slot23;
            if(!tangon) { _fun00022_ip = 154; continue _fun00021 }
 112:
            golfie = _closure1_slot1;
            oscard = _closure1_slot3;
            report = 9;
            oscard = oscard[report];
            report = undefined;
            option = golfie.bind(report)(oscard);
            golfie = option.isEqual;
            oscard = _closure1_slot25;
            report = _closure1_slot26;
            tangon = golfie.bind(option)(oscard, report);
 154:
            if(!tangon) { _fun00022_ip = 167; continue _fun00021 }
 157:
            tangon = true;
            _closure2_slot0 = tangon;
            _closure1_slot23 = zuuluu;
 167:
            michal = _closure2_slot0;
            if(!michal) { _fun00022_ip = 188; continue _fun00021 }
 174:
            michal = _closure1_slot28;
            entity = michal.emitChange;
            entity = entity.bind(michal)();
 188:
            entity = undefined;
            return entity;
        }
    };
    michal = 500;
    michal = yankee.bind(romeon)(verify, michal);
    var _closure1_slot27 = michal;
    michal = 16;
    michal = oscard[michal];
    michal = option.bind(entity)(michal);
    verify = michal.Store;
    michal = function(argFoo) {
        tangon = function() { // Original name: GuildSettingsRolesStore
            report = this;
            tangon = undefined;
            entity = undefined;
            oscard = _closure1_slot4;
            zuuluu = _closure2_slot0;
            oscard = oscard.bind(tangon)(report, zuuluu);
            michal = _closure1_slot29;
            entity = arguments;
            entity = michal.bind(tangon)(report, zuuluu, entity);
            return entity;
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
        entity = function() { // Original name: value
            report = this;
            tangon = report.waitFor;
            zuuluu = _closure1_slot11;
            michal = _closure1_slot9;
            entity = _closure1_slot10;
            entity = tangon.bind(report)(zuuluu, michal, entity);
            entity = undefined;
            return entity;
        };
        report['value'] = entity;
        entity = new Array(15);
        entity[0] = report;
        report = {};
        golfie = 'hasChanges';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                entity = _closure1_slot19;
                if(entity) { _fun00026_ip = 14; continue _fun00025 }
 10:
                entity = _closure1_slot20;
 14:
                if(entity) { _fun00026_ip = 21; continue _fun00025 }
 17:
                entity = _closure1_slot23;
 21:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[1] = report;
        report = {};
        golfie = 'errorMessage';
        report['key'] = golfie;
        golfie = function() { // Original name: get
            entity = _closure1_slot16;
            return entity;
        };
        report['get'] = golfie;
        entity[2] = report;
        report = {};
        golfie = 'hasSortChanges';
        report['key'] = golfie;
        golfie = function() { // Original name: get
            entity = _closure1_slot20;
            return entity;
        };
        report['get'] = golfie;
        entity[3] = report;
        report = {};
        golfie = 'hasRoleConfigurationChanges';
        report['key'] = golfie;
        golfie = function() { // Original name: get
            entity = _closure1_slot23;
            return entity;
        };
        report['get'] = golfie;
        entity[4] = report;
        report = {};
        golfie = 'guild';
        report['key'] = golfie;
        golfie = function() { // Original name: get
            entity = _closure1_slot14;
            return entity;
        };
        report['get'] = golfie;
        entity[5] = report;
        report = {};
        golfie = 'editedRoleIds';
        report['key'] = golfie;
        golfie = function() { // Original name: get
            entity = global;
            zuuluu = entity.Array;
            michal = zuuluu.from;
            entity = _closure1_slot17;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        report['get'] = golfie;
        entity[6] = report;
        report = {};
        golfie = 'editedRoleIdsForConfigurations';
        report['key'] = golfie;
        golfie = function() { // Original name: get
            entity = _closure1_slot24;
            return entity;
        };
        report['get'] = golfie;
        entity[7] = report;
        report = {};
        golfie = 'roles';
        report['key'] = golfie;
        golfie = function() { // Original name: get
            entity = _closure1_slot21;
            return entity;
        };
        report['get'] = golfie;
        entity[8] = report;
        report = {};
        golfie = 'formState';
        report['key'] = golfie;
        golfie = function() { // Original name: get
            entity = _closure1_slot18;
            return entity;
        };
        report['get'] = golfie;
        entity[9] = report;
        report = {};
        golfie = 'getSortDeltas';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            michal = _closure1_slot31;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        };
        report['value'] = golfie;
        entity[10] = report;
        report = {};
        golfie = 'showNotice';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            michal = this;
            entity = michal.hasChanges;
            entity = entity.bind(michal)();
            return entity;
        };
        report['value'] = golfie;
        entity[11] = report;
        report = {};
        golfie = 'getRole';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            zuuluu = _closure1_slot34;
            michal = undefined;
            entity = argFoo;
            entity = zuuluu.bind(michal)(entity);
            return entity;
        };
        report['value'] = golfie;
        entity[12] = report;
        report = {};
        golfie = 'getPermissionSearchQuery';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = _closure1_slot15;
            return entity;
        };
        report['value'] = golfie;
        entity[13] = report;
        report = {};
        golfie = 'getEditedRoleConnectionConfigurationsMap';
        report['key'] = golfie;
        oscard = function() { // Original name: value
            entity = _closure1_slot26;
            return entity;
        };
        report['value'] = oscard;
        entity[14] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    verify = michal.bind(entity)(verify);
    michal = 'GuildSettingsRolesStore';
    verify['displayName'] = michal;
    michal = 17;
    michal = oscard[michal];
    kiloes = option.bind(entity)(michal);
    michal = {};
    yankee = function() { // Original name: GUILD_SETTINGS_ROLES_INIT
        michal = _closure1_slot32;
        entity = undefined;
        michal = michal.bind(entity)();
        return entity;
    };
    michal['GUILD_SETTINGS_ROLES_INIT'] = yankee;
    michal['GUILD_SETTINGS_INIT'] = offset;
    michal['GUILD_SETTINGS_SET_SECTION'] = offset;
    offset = function(argFoo) { // Original name: handleSortUpdate
        _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
            entity = argFoo;
            tangon = entity.roles;
            zuuluu = _closure1_slot21;
            entity = null;
            if(!(entity != zuuluu)) { _fun00028_ip = 40; continue _fun00027 }
 22:
            zuuluu = tangon.length;
            entity = _closure1_slot21;
            entity = entity.length;
            if(!(zuuluu === entity)) { _fun00028_ip = 117; continue _fun00027 }
 40:
            zuuluu = tangon.map;
            entity = function(argFoo) {
                zuuluu = _closure1_slot34;
                michal = undefined;
                entity = argFoo;
                entity = zuuluu.bind(michal)(entity);
                return entity;
            };
            report = zuuluu.bind(tangon)(entity);
            tangon = report.filter;
            oscard = _closure1_slot0;
            zuuluu = _closure1_slot3;
            entity = 11;
            zuuluu = zuuluu[entity];
            entity = undefined;
            zuuluu = oscard.bind(entity)(zuuluu);
            zuuluu = zuuluu.isNotNullish;
            zuuluu = tangon.bind(report)(zuuluu);
            _closure1_slot21 = zuuluu;
            zuuluu = true;
            _closure1_slot20 = zuuluu;
            michal = _closure1_slot27;
            michal = michal.bind(entity)();
            return entity;
 117:
            entity = false;
            return entity;
        }
    };
    michal['GUILD_SETTINGS_ROLES_SORT_UPDATE'] = offset;
    offset = function(argFoo) { // Original name: handleUpdatePermissions
        _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
            entity = argFoo;
            michal = entity.id;
            verify = entity.flag;
            report = entity.allow;
            entity = _closure1_slot34;
            tangon = undefined;
            zuuluu = entity.bind(tangon)(michal);
            entity = null;
            if(!(entity != zuuluu)) { _fun00030_ip = 113; continue _fun00029 }
 40:
            option = zuuluu.permissions;
            michal = _closure1_slot33;
            entity = {};
            golfie = _closure1_slot2;
            offset = _closure1_slot3;
            oscard = 12;
            oscard = offset[oscard];
            golfie = golfie.bind(tangon)(oscard);
            if(report) { _fun00030_ip = 89; continue _fun00029 }
 75:
            report = golfie.remove;
            report = report.bind(golfie)(option, verify);
            _fun00030_ip = 100; continue _fun00029;
 89:
            oscard = golfie.add;
            report = oscard.bind(golfie)(option, verify);
 100:
            entity['permissions'] = report;
            entity = michal.bind(tangon)(zuuluu, entity);
            return entity;
 113:
            entity = false;
            return entity;
        }
    };
    michal['GUILD_SETTINGS_ROLES_UPDATE_PERMISSIONS'] = offset;
    offset = function(argFoo) { // Original name: handleUpdatePermissionSet
        _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.id;
            oscard = entity.permissions;
            entity = _closure1_slot34;
            report = undefined;
            tangon = entity.bind(report)(zuuluu);
            entity = null;
            entity = entity != tangon;
            if(!entity) { _fun00032_ip = 54; continue _fun00031 }
 37:
            zuuluu = _closure1_slot33;
            michal = {};
            michal['permissions'] = oscard;
            entity = zuuluu.bind(report)(tangon, michal);
 54:
            return entity;
        }
    };
    michal['GUILD_SETTINGS_ROLES_UPDATE_PERMISSION_SET'] = offset;
    offset = function(argFoo) { // Original name: handleClearRolePermissions
        _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
            entity = argFoo;
            michal = entity.id;
            entity = _closure1_slot34;
            report = undefined;
            tangon = entity.bind(report)(michal);
            entity = null;
            entity = entity != tangon;
            if(!entity) { _fun00034_ip = 74; continue _fun00033 }
 31:
            zuuluu = _closure1_slot33;
            michal = {};
            golfie = _closure1_slot2;
            option = _closure1_slot3;
            oscard = 13;
            oscard = option[oscard];
            oscard = golfie.bind(report)(oscard);
            oscard = oscard.NONE;
            michal['permissions'] = oscard;
            entity = zuuluu.bind(report)(tangon, michal);
 74:
            return entity;
        }
    };
    michal['GUILD_SETTINGS_ROLES_CLEAR_PERMISSIONS'] = offset;
    offset = function(argFoo) { // Original name: handleUpdateName
        _fun00035: for(var _fun00036_ip = 0; ; ) switch(_fun00036_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.id;
            oscard = entity.name;
            entity = _closure1_slot34;
            report = undefined;
            tangon = entity.bind(report)(zuuluu);
            entity = null;
            entity = entity != tangon;
            if(!entity) { _fun00036_ip = 52; continue _fun00035 }
 36:
            zuuluu = _closure1_slot33;
            michal = {};
            michal['name'] = oscard;
            entity = zuuluu.bind(report)(tangon, michal);
 52:
            return entity;
        }
    };
    michal['GUILD_SETTINGS_ROLES_UPDATE_NAME'] = offset;
    offset = function(argFoo) { // Original name: handleUpdateDescription
        _fun00037: for(var _fun00038_ip = 0; ; ) switch(_fun00038_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.id;
            oscard = entity.description;
            entity = _closure1_slot34;
            report = undefined;
            tangon = entity.bind(report)(zuuluu);
            entity = null;
            entity = entity != tangon;
            if(!entity) { _fun00038_ip = 52; continue _fun00037 }
 36:
            zuuluu = _closure1_slot33;
            michal = {};
            michal['description'] = oscard;
            entity = zuuluu.bind(report)(tangon, michal);
 52:
            return entity;
        }
    };
    michal['GUILD_SETTINGS_ROLES_UPDATE_DESCRIPTION'] = offset;
    offset = function(argFoo) { // Original name: handleUpdateColor
        _fun00039: for(var _fun00040_ip = 0; ; ) switch(_fun00040_ip) {
 0:
            entity = argFoo;
            tangon = entity.id;
            golfie = entity.color;
            entity = null;
            michal = 0;
            oscard = null;
            if(!(michal !== golfie)) { _fun00040_ip = 59; continue _fun00039 }
 23:
            report = _closure1_slot0;
            zuuluu = _closure1_slot3;
            michal = 14;
            zuuluu = zuuluu[michal];
            michal = undefined;
            zuuluu = report.bind(michal)(zuuluu);
            michal = zuuluu.int2hex;
            oscard = michal.bind(zuuluu)(golfie);
 59:
            zuuluu = _closure1_slot34;
            report = undefined;
            tangon = zuuluu.bind(report)(tangon);
            entity = entity != tangon;
            if(!entity) { _fun00040_ip = 101; continue _fun00039 }
 80:
            zuuluu = _closure1_slot33;
            michal = {};
            michal['color'] = golfie;
            michal['colorString'] = oscard;
            entity = zuuluu.bind(report)(tangon, michal);
 101:
            return entity;
        }
    };
    michal['GUILD_SETTINGS_ROLES_UPDATE_COLOR'] = offset;
    offset = function(argFoo) { // Original name: handleUpdateColors
        _fun00041: for(var _fun00042_ip = 0; ; ) switch(_fun00042_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.id;
            oscard = entity.colors;
            michal = _closure1_slot34;
            tangon = undefined;
            zuuluu = michal.bind(tangon)(zuuluu);
            michal = null;
            if(!(michal != zuuluu)) { _fun00042_ip = 102; continue _fun00041 }
 33:
            report = _closure1_slot1;
            golfie = _closure1_slot3;
            michal = 15;
            michal = golfie[michal];
            michal = report.bind(tangon)(michal);
            report = michal.bind(tangon)(oscard);
            michal = _closure1_slot33;
            entity = {};
            golfie = oscard.primary_color;
            entity['color'] = golfie;
            entity['colors'] = oscard;
            oscard = report.primaryColor;
            entity['colorString'] = oscard;
            entity['colorStrings'] = report;
            entity = michal.bind(tangon)(zuuluu, entity);
            return entity;
 102:
            entity = false;
            return entity;
        }
    };
    michal['GUILD_SETTINGS_ROLES_UPDATE_COLORS'] = offset;
    offset = function(argFoo) { // Original name: handleUpdateSettings
        _fun00043: for(var _fun00044_ip = 0; ; ) switch(_fun00044_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.id;
            golfie = entity.hoist;
            oscard = entity.mentionable;
            entity = _closure1_slot34;
            report = undefined;
            tangon = entity.bind(report)(zuuluu);
            entity = null;
            entity = entity != tangon;
            if(!entity) { _fun00044_ip = 65; continue _fun00043 }
 43:
            zuuluu = _closure1_slot33;
            michal = {};
            michal['hoist'] = golfie;
            michal['mentionable'] = oscard;
            entity = zuuluu.bind(report)(tangon, michal);
 65:
            return entity;
        }
    };
    michal['GUILD_SETTINGS_ROLES_UPDATE_SETTINGS'] = offset;
    offset = function(argFoo) { // Original name: handleUpdateRoleIcon
        _fun00045: for(var _fun00046_ip = 0; ; ) switch(_fun00046_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.id;
            golfie = entity.icon;
            oscard = entity.unicodeEmoji;
            entity = _closure1_slot34;
            report = undefined;
            tangon = entity.bind(report)(zuuluu);
            entity = null;
            entity = entity != tangon;
            if(!entity) { _fun00046_ip = 63; continue _fun00045 }
 42:
            zuuluu = _closure1_slot33;
            michal = {};
            michal['icon'] = golfie;
            michal['unicodeEmoji'] = oscard;
            entity = zuuluu.bind(report)(tangon, michal);
 63:
            return entity;
        }
    };
    michal['GUILD_SETTINGS_ROLES_UPDATE_ROLE_ICON'] = offset;
    offset = function(argFoo) { // Original name: handleInsertRole
        _fun00047: for(var _fun00048_ip = 0; ; ) switch(_fun00048_ip) {
 0:
            entity = argFoo;
            tangon = entity.role;
            michal = entity.searchQuery;
            var _closure1_slot15 = michal;
            report = null;
            if(!(report != tangon)) { _fun00048_ip = 101; continue _fun00047 }
 28:
            oscard = _closure1_slot34;
            zuuluu = tangon.id;
            michal = undefined;
            zuuluu = oscard.bind(michal)(zuuluu);
            if(!(report != zuuluu)) { _fun00048_ip = 60; continue _fun00047 }
 48:
            zuuluu = _closure1_slot33;
            zuuluu = zuuluu.bind(michal)(tangon, tangon);
            _fun00048_ip = 101; continue _fun00047;
 60:
            option = _closure1_slot21;
            zuuluu = new Array(1);
            golfie = 0;
            verify = zuuluu;
            report = arraySpread(verify, option, golfie);
            zuuluu[report] = tangon;
            tangon = 1;
            tangon = report + tangon;
            _closure1_slot21 = zuuluu;
            entity = _closure1_slot27;
            entity = entity.bind(michal)();
 101:
            entity = undefined;
            return entity;
        }
    };
    michal['GUILD_SETTINGS_ROLE_SELECT'] = offset;
    offset = function(argFoo) { // Original name: handleFetchRoleConnectionConfigurations
        _fun00049: for(var _fun00050_ip = 0; ; ) switch(_fun00050_ip) {
 0:
            entity = argFoo;
            tangon = entity.roleId;
            oscard = entity.roleConnectionConfigurations;
            zuuluu = _closure1_slot34;
            entity = undefined;
            zuuluu = zuuluu.bind(entity)(tangon);
            tangon = null;
            if(!(tangon != zuuluu)) { _fun00050_ip = 143; continue _fun00049 }
 35:
            golfie = _closure1_slot25;
            report = golfie.get;
            tangon = zuuluu.id;
            golfie = report.bind(golfie)(tangon);
            report = _closure1_slot1;
            option = _closure1_slot3;
            tangon = 9;
            tangon = option[tangon];
            report = report.bind(entity)(tangon);
            tangon = report.isEqual;
            tangon = tangon.bind(report)(golfie, oscard);
            if(tangon) { _fun00050_ip = 139; continue _fun00049 }
 89:
            golfie = _closure1_slot26;
            report = golfie.set;
            tangon = zuuluu.id;
            tangon = report.bind(golfie)(tangon, oscard);
            report = _closure1_slot25;
            tangon = report.set;
            zuuluu = zuuluu.id;
            zuuluu = tangon.bind(report)(zuuluu, oscard);
            michal = _closure1_slot27;
            michal = michal.bind(entity)();
            return entity;
 139:
            entity = false;
            return entity;
 143:
            entity = false;
            return entity;
        }
    };
    michal['GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS'] = offset;
    offset = function(argFoo) { // Original name: handleUpdateRoleConnectionConfigurations
        _fun00051: for(var _fun00052_ip = 0; ; ) switch(_fun00052_ip) {
 0:
            entity = argFoo;
            tangon = entity.roleId;
            oscard = entity.roleConnectionConfigurations;
            zuuluu = _closure1_slot34;
            entity = undefined;
            zuuluu = zuuluu.bind(entity)(tangon);
            tangon = null;
            if(!(tangon != zuuluu)) { _fun00052_ip = 90; continue _fun00051 }
 35:
            tangon = true;
            _closure1_slot23 = tangon;
            golfie = _closure1_slot24;
            report = golfie.add;
            tangon = zuuluu.id;
            tangon = report.bind(golfie)(tangon);
            report = _closure1_slot26;
            tangon = report.set;
            zuuluu = zuuluu.id;
            zuuluu = tangon.bind(report)(zuuluu, oscard);
            michal = _closure1_slot27;
            michal = michal.bind(entity)();
            return entity;
 90:
            entity = false;
            return entity;
        }
    };
    michal['GUILD_SETTINGS_ROLES_UPDATE_ROLE_CONNECTION_CONFIGURATIONS'] = offset;
    offset = function() { // Original name: handleClose
        entity = null;
        _closure1_slot14 = entity;
        entity = new Array(0);
        _closure1_slot21 = entity;
        _closure1_slot22 = entity;
        zuuluu = _closure1_slot25;
        entity = zuuluu.clear;
        entity = entity.bind(zuuluu)();
        zuuluu = _closure1_slot17;
        entity = zuuluu.clear;
        entity = entity.bind(zuuluu)();
        zuuluu = _closure1_slot26;
        entity = zuuluu.clear;
        entity = entity.bind(zuuluu)();
        entity = global;
        entity = entity.Set;
        zuuluu = entity.prototype;
        zuuluu = Object.create(zuuluu, {constructor: {value: entity}});
        tangon = zuuluu;
        entity = new tangon[entity](zuuluu);
        entity = entity instanceof Object ? entity : zuuluu;
        _closure1_slot24 = entity;
        entity = false;
        _closure1_slot19 = entity;
        _closure1_slot20 = entity;
        _closure1_slot23 = entity;
        entity = _closure1_slot13;
        entity = entity.CLOSED;
        _closure1_slot18 = entity;
        entity = undefined;
        return entity;
    };
    michal['GUILD_SETTINGS_CLOSE'] = offset;
    michal['GUILD_ROLE_CREATE'] = golfie;
    michal['GUILD_ROLE_UPDATE'] = golfie;
    golfie = function(argFoo) { // Original name: handleRoleDelete
        _fun00053: for(var _fun00054_ip = 0; ; ) switch(_fun00054_ip) {
 0:
            zuuluu = argFoo;
            report = _closure1_slot24;
            tangon = report.has;
            michal = zuuluu.roleId;
            michal = tangon.bind(report)(michal);
            if(!michal) { _fun00054_ip = 95; continue _fun00053 }
 29:
            report = _closure1_slot24;
            tangon = report.delete;
            michal = zuuluu.roleId;
            michal = tangon.bind(report)(michal);
            report = _closure1_slot25;
            tangon = report.delete;
            michal = zuuluu.roleId;
            michal = tangon.bind(report)(michal);
            report = _closure1_slot26;
            tangon = report.delete;
            michal = zuuluu.roleId;
            michal = tangon.bind(report)(michal);
            michal = false;
            _closure1_slot23 = michal;
 95:
            michal = _closure1_slot35;
            entity = undefined;
            entity = michal.bind(entity)(zuuluu);
            return entity;
        }
    };
    michal['GUILD_ROLE_DELETE'] = golfie;
    golfie = function() { // Original name: handleSubmitting
        entity = _closure1_slot13;
        entity = entity.SUBMITTING;
        _closure1_slot18 = entity;
        entity = undefined;
        return entity;
    };
    michal['GUILD_SETTINGS_ROLES_SUBMITTING'] = golfie;
    golfie = function(argFoo) { // Original name: handleSaveFail
        entity = argFoo;
        michal = entity.message;
        zuuluu = _closure1_slot13;
        zuuluu = zuuluu.OPEN;
        _closure1_slot18 = zuuluu;
        _closure1_slot16 = michal;
        entity = undefined;
        return entity;
    };
    michal['GUILD_SETTINGS_ROLES_SAVE_FAIL'] = golfie;
    golfie = function() { // Original name: handleSaveSuccess
        zuuluu = _closure1_slot32;
        entity = undefined;
        michal = false;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    michal['GUILD_SETTINGS_ROLES_SAVE_SUCCESS'] = golfie;
    golfie = verify.prototype;
    golfie = Object.create(golfie, {constructor: {value: verify}});
    sizing = golfie;
    backup = michal;
    michal = new sizing[verify](kiloes, backup, foxtra);
    michal = michal instanceof Object ? michal : golfie;
    var _closure1_slot28 = michal;
    tangon = 18;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/guild_settings/GuildSettingsRolesStore.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();