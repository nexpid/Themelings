// app/modules/guild_settings/GuildSettingsRolesStore.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    oscard = argBar;
    verify = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = verify;
    entity = argCor;
    var _closure1_slot2 = entity;
    var _closure1_slot3 = golfie;
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
            _closure1_slot36 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot36 = entity;
    entity = function() { // Original name: calculatePositionDeltas
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = _closure1_slot19;
            michal = null;
            if(!(michal != entity)) { _fun00004_ip = 198; continue _fun00003 }
 18:
            entity = _closure1_slot27;
            if(!(michal != entity)) { _fun00004_ip = 198; continue _fun00003 }
 29:
            zuuluu = _closure1_slot1;
            golfie = _closure1_slot3;
            entity = 11;
            entity = golfie[entity];
            michal = undefined;
            oscard = zuuluu.bind(michal)(entity);
            verify = _closure1_slot11;
            option = verify.getRoles;
            entity = _closure1_slot19;
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
            entity = 12;
            entity = golfie[entity];
            zuuluu = zuuluu.bind(michal)(entity);
            michal = zuuluu.calculatePositionDeltas;
            entity = {};
            entity['oldOrdering'] = oscard;
            report = _closure1_slot27;
            entity['newOrdering'] = report;
            report = function(argFoo) { // Original name: idGetter
                entity = argFoo;
                entity = entity.id;
                return entity;
            };
            entity['idGetter'] = report;
            tangon = function(argFoo) { // Original name: existingPositionGetter
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    entity = argFoo;
                    michal = entity.originalPosition;
                    entity = null;
                    zuuluu = entity != michal;
                    entity = inf;
                    if(!zuuluu) { _fun00006_ip = 31; continue _fun00005 }
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
    var _closure1_slot37 = entity;
    yankee = function(argFoo) { // Original name: handleSetSection
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.section;
            tangon = _closure1_slot19;
            michal = null;
            if(!(michal == tangon)) { _fun00008_ip = 47; continue _fun00007 }
 21:
            michal = _closure1_slot13;
            michal = michal.ROLES;
            if(!(zuuluu === michal)) { _fun00008_ip = 47; continue _fun00007 }
 35:
            michal = _closure1_slot38;
            entity = undefined;
            michal = michal.bind(entity)();
            return entity;
 47:
            entity = false;
            return entity;
        }
    };
    entity = function() { // Original name: handleInit
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            tangon = arguments[0];
            entity = undefined;
            if(!(tangon === entity)) { _fun00010_ip = 13; continue _fun00009 }
 11:
            tangon = true;
 13:
            oscard = _closure1_slot12;
            report = oscard.getProps;
            report = report.bind(oscard)();
            report = report.guild;
            var _closure1_slot19 = report;
            report = false;
            _closure1_slot25 = report;
            _closure1_slot26 = report;
            var _closure1_slot21 = entity;
            golfie = _closure1_slot23;
            oscard = golfie.clear;
            oscard = oscard.bind(golfie)();
            golfie = _closure1_slot33;
            oscard = golfie.clear;
            oscard = oscard.bind(golfie)();
            oscard = _closure1_slot14;
            oscard = oscard.OPEN;
            _closure1_slot24 = oscard;
            golfie = _closure1_slot19;
            oscard = null;
            if(!(oscard == golfie)) { _fun00010_ip = 111; continue _fun00009 }
 105:
            verify = new Array(0);
            _fun00010_ip = 206; continue _fun00009;
 111:
            golfie = _closure1_slot1;
            option = _closure1_slot3;
            oscard = 11;
            oscard = option[oscard];
            golfie = golfie.bind(entity)(oscard);
            offset = _closure1_slot11;
            option = offset.getRoles;
            oscard = _closure1_slot19;
            oscard = oscard.id;
            oscard = option.bind(offset)(oscard);
            golfie = golfie.bind(entity)(oscard);
            oscard = golfie.values;
            option = oscard.bind(golfie)();
            golfie = option.sortBy;
            oscard = function(argFoo) {
                entity = argFoo;
                entity = entity.position;
                return entity;
            };
            golfie = golfie.bind(option)(oscard);
            oscard = golfie.reverse;
            golfie = oscard.bind(golfie)();
            oscard = golfie.value;
            verify = oscard.bind(golfie)();
 206:
            _closure1_slot27 = verify;
            golfie = _closure1_slot39;
            oscard = new Array(0);
            yankee = 0;
            foxtra = oscard;
            romeon = verify;
            option = arraySpread(foxtra, romeon, yankee);
            _closure1_slot28 = oscard;
            oscard = golfie.bind(entity)(oscard);
            _closure1_slot29 = report;
            if(!tangon) { _fun00010_ip = 281; continue _fun00009 }
 246:
            report = _closure1_slot32;
            tangon = report.clear;
            tangon = tangon.bind(report)();
            tangon = _closure1_slot31;
            zuuluu = tangon.forEach;
            michal = function(argFoo, argBar) {
                tangon = _closure1_slot32;
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
 281:
            return entity;
        }
    };
    var _closure1_slot38 = entity;
    entity = function(argFoo) { // Original name: initRoleStyles
        zuuluu = argFoo;
        michal = zuuluu.forEach;
        entity = function(argFoo) {
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                entity = argFoo;
                zuuluu = _closure1_slot22;
                zuuluu = zuuluu.SOLID;
                report = entity.colors;
                tangon = null;
                oscard = zuuluu;
                if(!(tangon != report)) { _fun00012_ip = 85; continue _fun00011 }
 30:
                report = entity.colors;
                report = report.tertiary_color;
                if(!(tangon == report)) { _fun00012_ip = 72; continue _fun00011 }
 45:
                report = entity.colors;
                report = report.secondary_color;
                if(!(tangon != report)) { _fun00012_ip = 70; continue _fun00011 }
 60:
                report = _closure1_slot22;
                zuuluu = report.GRADIENT;
 70:
                _fun00012_ip = 82; continue _fun00011;
 72:
                report = _closure1_slot22;
                zuuluu = report.HOLOGRAPHIC;
 82:
                oscard = zuuluu;
 85:
                report = {};
                zuuluu = _closure1_slot22;
                golfie = zuuluu.SOLID;
                zuuluu = {'primary_color': null, 'secondary_color': null, 'tertiary_color': null};
                option = _closure1_slot15;
                zuuluu['primary_color'] = option;
                report[golfie] = zuuluu;
                zuuluu = _closure1_slot22;
                golfie = zuuluu.GRADIENT;
                zuuluu = {};
                option = _closure1_slot17;
                option = option.primary_color;
                zuuluu['primary_color'] = option;
                option = _closure1_slot17;
                option = option.secondary_color;
                zuuluu['secondary_color'] = option;
                zuuluu['tertiary_color'] = tangon;
                report[golfie] = zuuluu;
                zuuluu = _closure1_slot22;
                golfie = zuuluu.HOLOGRAPHIC;
                zuuluu = {};
                option = _closure1_slot18;
                option = option.primary_color;
                zuuluu['primary_color'] = option;
                option = _closure1_slot18;
                option = option.secondary_color;
                zuuluu['secondary_color'] = option;
                option = _closure1_slot18;
                option = option.tertiary_color;
                zuuluu['tertiary_color'] = option;
                report[golfie] = zuuluu;
                zuuluu = entity.colors;
                if(!(tangon != zuuluu)) { _fun00012_ip = 331; continue _fun00011 }
 245:
                zuuluu = {};
                golfie = entity.colors;
                golfie = golfie.primary_color;
                if(!(tangon == golfie)) { _fun00012_ip = 266; continue _fun00011 }
 262:
                golfie = _closure1_slot15;
 266:
                zuuluu['primary_color'] = golfie;
                golfie = entity.colors;
                option = golfie.secondary_color;
                verify = tangon != option;
                golfie = null;
                if(!verify) { _fun00012_ip = 294; continue _fun00011 }
 291:
                golfie = option;
 294:
                zuuluu['secondary_color'] = golfie;
                golfie = entity.colors;
                golfie = golfie.tertiary_color;
                option = tangon != golfie;
                tangon = null;
                if(!option) { _fun00012_ip = 322; continue _fun00011 }
 319:
                tangon = golfie;
 322:
                zuuluu['tertiary_color'] = tangon;
                report[oscard] = zuuluu;
 331:
                tangon = _closure1_slot33;
                zuuluu = tangon.set;
                michal = entity.id;
                entity = {};
                entity['currentStyle'] = oscard;
                entity['styleColors'] = report;
                entity = zuuluu.bind(tangon)(michal, entity);
                entity = undefined;
                return entity;
            }
        };
        entity = michal.bind(zuuluu)(entity);
        entity = undefined;
        return entity;
    };
    var _closure1_slot39 = entity;
    entity = function(argFoo, argBar) { // Original name: updateRole
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            zuuluu = argFoo;
            tangon = _closure1_slot27;
            michal = tangon.indexOf;
            tangon = michal.bind(tangon)(zuuluu);
            report = 0;
            if(!(!(tangon < report))) { _fun00014_ip = 115; continue _fun00013 }
 27:
            michal = {};
            option = michal;
            golfie = zuuluu;
            zuuluu = copyDataProperties(option, golfie);
            golfie = argBar;
            option = michal;
            zuuluu = copyDataProperties(option, golfie);
            zuuluu = _closure1_slot27;
            zuuluu[tangon] = michal;
            golfie = _closure1_slot27;
            zuuluu = new Array(0);
            option = zuuluu;
            oscard = 0;
            tangon = arraySpread(option, golfie, oscard);
            _closure1_slot27 = zuuluu;
            zuuluu = true;
            _closure1_slot25 = zuuluu;
            tangon = _closure1_slot23;
            zuuluu = tangon.add;
            michal = michal.id;
            michal = zuuluu.bind(tangon)(michal);
            michal = _closure1_slot34;
            entity = undefined;
            michal = michal.bind(entity)();
            return entity;
 115:
            entity = false;
            return entity;
        }
    };
    var _closure1_slot40 = entity;
    entity = function(argFoo) { // Original name: _getRole
        michal = argFoo;
        var _closure2_slot0 = michal;
        zuuluu = _closure1_slot27;
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
    var _closure1_slot41 = entity;
    option = function(argFoo) { // Original name: syncGuildChanges
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            entity = argFoo;
            report = entity.guildId;
            entity = undefined;
            var _closure2_slot0 = entity;
            var _closure2_slot1 = entity;
            tangon = _closure1_slot19;
            oscard = null;
            if(!(oscard != tangon)) { _fun00016_ip = 373; continue _fun00015 }
 36:
            tangon = _closure1_slot19;
            tangon = tangon.id;
            if(!(report === tangon)) { _fun00016_ip = 373; continue _fun00015 }
 52:
            report = _closure1_slot24;
            tangon = _closure1_slot14;
            tangon = tangon.SUBMITTING;
            if(!(report !== tangon)) { _fun00016_ip = 373; continue _fun00015 }
 73:
            report = _closure1_slot12;
            tangon = report.getProps;
            tangon = tangon.bind(report)();
            tangon = tangon.guild;
            _closure1_slot19 = tangon;
            report = new Array(0);
            _closure2_slot0 = report;
            if(!(oscard != tangon)) { _fun00016_ip = 210; continue _fun00015 }
 108:
            oscard = _closure1_slot1;
            golfie = _closure1_slot3;
            tangon = 11;
            tangon = golfie[tangon];
            oscard = oscard.bind(entity)(tangon);
            option = _closure1_slot11;
            golfie = option.getRoles;
            tangon = _closure1_slot19;
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
 210:
            golfie = _closure1_slot23;
            oscard = golfie.forEach;
            tangon = function(argFoo) {
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    tangon = argFoo;
                    var _closure3_slot0 = tangon;
                    report = _closure1_slot41;
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
                    zuuluu = _closure1_slot23;
                    michal = zuuluu.delete;
                    michal = michal.bind(zuuluu)(tangon);
 95:
                    return entity;
                }
            };
            tangon = oscard.bind(golfie)(tangon);
            tangon = _closure1_slot23;
            oscard = tangon.size;
            tangon = 0;
            if(!(tangon === oscard)) { _fun00016_ip = 252; continue _fun00015 }
 246:
            oscard = false;
            _closure1_slot25 = oscard;
 252:
            oscard = global;
            oscard = oscard.Map;
            golfie = oscard.prototype;
            golfie = Object.create(golfie, {constructor: {value: oscard}});
            foxtra = golfie;
            oscard = new foxtra[oscard](romeon);
            golfie = oscard instanceof Object ? oscard : golfie;
            _closure2_slot1 = golfie;
            verify = _closure1_slot23;
            option = verify.forEach;
            oscard = function(argFoo) {
                _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                    tangon = argFoo;
                    michal = _closure1_slot33;
                    entity = michal.get;
                    zuuluu = entity.bind(michal)(tangon);
                    entity = null;
                    if(!(entity != zuuluu)) { _fun00022_ip = 44; continue _fun00021 }
 26:
                    michal = _closure2_slot1;
                    entity = michal.set;
                    entity = entity.bind(michal)(tangon, zuuluu);
 44:
                    entity = undefined;
                    return entity;
                }
            };
            oscard = option.bind(verify)(oscard);
            option = _closure1_slot33;
            oscard = option.clear;
            oscard = oscard.bind(option)();
            oscard = _closure1_slot39;
            oscard = oscard.bind(entity)(report);
            oscard = golfie.forEach;
            michal = function(argFoo, argBar) {
                tangon = _closure1_slot33;
                zuuluu = tangon.set;
                michal = argBar;
                entity = argFoo;
                entity = zuuluu.bind(tangon)(michal, entity);
                entity = undefined;
                return entity;
            };
            michal = oscard.bind(golfie)(michal);
            michal = false;
            _closure1_slot26 = michal;
            michal = new Array(0);
            romeon = michal;
            yankee = report;
            offset = 0;
            tangon = arraySpread(romeon, yankee, offset);
            _closure1_slot27 = michal;
            return entity;
 373:
            entity = false;
            return entity;
        }
    };
    var _closure1_slot42 = option;
    tangon = global;
    romeon = tangon.Object;
    offset = romeon.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = offset.bind(romeon)(zuuluu, entity, michal);
    entity = 0;
    michal = golfie[entity];
    entity = undefined;
    michal = verify.bind(entity)(michal);
    var _closure1_slot4 = michal;
    michal = 1;
    michal = golfie[michal];
    michal = verify.bind(entity)(michal);
    var _closure1_slot5 = michal;
    michal = 2;
    michal = golfie[michal];
    michal = verify.bind(entity)(michal);
    var _closure1_slot6 = michal;
    michal = 3;
    michal = golfie[michal];
    michal = verify.bind(entity)(michal);
    var _closure1_slot7 = michal;
    michal = 4;
    michal = golfie[michal];
    michal = verify.bind(entity)(michal);
    var _closure1_slot8 = michal;
    michal = 5;
    michal = golfie[michal];
    michal = oscard.bind(entity)(michal);
    michal = michal.set;
    var _closure1_slot9 = michal;
    michal = 6;
    michal = golfie[michal];
    michal = verify.bind(entity)(michal);
    var _closure1_slot10 = michal;
    michal = 7;
    michal = golfie[michal];
    michal = verify.bind(entity)(michal);
    var _closure1_slot11 = michal;
    michal = 8;
    michal = golfie[michal];
    michal = verify.bind(entity)(michal);
    var _closure1_slot12 = michal;
    michal = 9;
    michal = golfie[michal];
    michal = oscard.bind(entity)(michal);
    offset = michal.GuildSettingsSections;
    var _closure1_slot13 = offset;
    offset = michal.FormStates;
    var _closure1_slot14 = offset;
    romeon = michal.DEFAULT_ROLE_COLOR;
    var _closure1_slot15 = romeon;
    michal = michal.GuildFeatures;
    var _closure1_slot16 = michal;
    michal = 10;
    michal = golfie[michal];
    michal = oscard.bind(entity)(michal);
    romeon = michal.DEFAULT_GRADIENT_ROLE_COLORS;
    var _closure1_slot17 = romeon;
    michal = michal.HOLOGRAPHIC_ROLE_COLORS;
    var _closure1_slot18 = michal;
    michal = {};
    romeon = 'solid';
    michal['SOLID'] = romeon;
    romeon = 'gradient';
    michal['GRADIENT'] = romeon;
    romeon = 'holographic';
    michal['HOLOGRAPHIC'] = romeon;
    var _closure1_slot22 = michal;
    romeon = tangon.Set;
    foxtra = romeon.prototype;
    foxtra = Object.create(foxtra, {constructor: {value: romeon}});
    output = foxtra;
    romeon = new output[romeon](sizing);
    romeon = romeon instanceof Object ? romeon : foxtra;
    var _closure1_slot23 = romeon;
    offset = offset.CLOSED;
    var _closure1_slot24 = offset;
    offset = false;
    var _closure1_slot25 = offset;
    var _closure1_slot26 = offset;
    romeon = new Array(0);
    var _closure1_slot27 = romeon;
    romeon = new Array(0);
    var _closure1_slot28 = romeon;
    var _closure1_slot29 = offset;
    offset = tangon.Set;
    romeon = offset.prototype;
    romeon = Object.create(romeon, {constructor: {value: offset}});
    output = romeon;
    offset = new output[offset](sizing);
    offset = offset instanceof Object ? offset : romeon;
    var _closure1_slot30 = offset;
    offset = tangon.Map;
    romeon = offset.prototype;
    romeon = Object.create(romeon, {constructor: {value: offset}});
    output = romeon;
    offset = new output[offset](sizing);
    offset = offset instanceof Object ? offset : romeon;
    var _closure1_slot31 = offset;
    offset = tangon.Map;
    romeon = offset.prototype;
    romeon = Object.create(romeon, {constructor: {value: offset}});
    output = romeon;
    offset = new output[offset](sizing);
    offset = offset instanceof Object ? offset : romeon;
    var _closure1_slot32 = offset;
    tangon = tangon.Map;
    offset = tangon.prototype;
    offset = Object.create(offset, {constructor: {value: tangon}});
    output = offset;
    tangon = new output[tangon](sizing);
    tangon = tangon instanceof Object ? tangon : offset;
    var _closure1_slot33 = tangon;
    tangon = 11;
    tangon = golfie[tangon];
    foxtra = verify.bind(entity)(tangon);
    romeon = foxtra.debounce;
    offset = function() {
        _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
            zuuluu = false;
            var _closure2_slot0 = zuuluu;
            tangon = _closure1_slot26;
            if(!tangon) { _fun00024_ip = 52; continue _fun00023 }
 18:
            report = _closure1_slot37;
            tangon = undefined;
            tangon = report.bind(tangon)();
            report = tangon.length;
            tangon = 0;
            tangon = report > tangon;
            _closure1_slot26 = tangon;
            if(tangon) { _fun00024_ip = 52; continue _fun00023 }
 46:
            tangon = true;
            _closure2_slot0 = tangon;
 52:
            offset = _closure1_slot23;
            golfie = new Array(0);
            report = 0;
            yankee = golfie;
            verify = 0;
            tangon = arraySpread(yankee, offset, verify);
            oscard = golfie.forEach;
            tangon = function(argFoo) {
                _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                    tangon = argFoo;
                    report = _closure1_slot1;
                    zuuluu = _closure1_slot3;
                    entity = 11;
                    zuuluu = zuuluu[entity];
                    entity = undefined;
                    golfie = report.bind(entity)(zuuluu);
                    oscard = golfie.isEqual;
                    zuuluu = _closure1_slot41;
                    report = zuuluu.bind(entity)(tangon);
                    zuuluu = function(argFoo) { // Original name: getOriginalRole
                        michal = argFoo;
                        var _closure4_slot0 = michal;
                        zuuluu = _closure1_slot28;
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
                    if(!zuuluu) { _fun00026_ip = 89; continue _fun00025 }
 66:
                    zuuluu = _closure1_slot23;
                    michal = zuuluu.delete;
                    michal = michal.bind(zuuluu)(tangon);
                    michal = true;
                    _closure2_slot0 = michal;
 89:
                    return entity;
                }
            };
            tangon = oscard.bind(golfie)(tangon);
            tangon = _closure1_slot23;
            tangon = tangon.size;
            if(!(report === tangon)) { _fun00024_ip = 105; continue _fun00023 }
 101:
            _closure1_slot25 = zuuluu;
 105:
            tangon = _closure1_slot29;
            if(!tangon) { _fun00024_ip = 154; continue _fun00023 }
 112:
            golfie = _closure1_slot1;
            oscard = _closure1_slot3;
            report = 11;
            oscard = oscard[report];
            report = undefined;
            option = golfie.bind(report)(oscard);
            golfie = option.isEqual;
            oscard = _closure1_slot31;
            report = _closure1_slot32;
            tangon = golfie.bind(option)(oscard, report);
 154:
            if(!tangon) { _fun00024_ip = 167; continue _fun00023 }
 157:
            tangon = true;
            _closure2_slot0 = tangon;
            _closure1_slot29 = zuuluu;
 167:
            michal = _closure2_slot0;
            if(!michal) { _fun00024_ip = 188; continue _fun00023 }
 174:
            michal = _closure1_slot35;
            entity = michal.emitChange;
            entity = entity.bind(michal)();
 188:
            entity = undefined;
            return entity;
        }
    };
    tangon = 500;
    tangon = romeon.bind(foxtra)(offset, tangon);
    var _closure1_slot34 = tangon;
    tangon = 18;
    tangon = golfie[tangon];
    tangon = verify.bind(entity)(tangon);
    offset = tangon.Store;
    tangon = function(argFoo) {
        tangon = function() { // Original name: GuildSettingsRolesStore
            _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
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
                entity = _closure1_slot36;
                entity = entity.bind(zuuluu)();
                if(entity) { _fun00028_ip = 69; continue _fun00027 }
 51:
                golfie = verify.apply;
                report = arguments;
                entity = report;
                entity = golfie.bind(verify)(tangon, entity);
                _fun00028_ip = 105; continue _fun00027;
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
        entity = function() { // Original name: value
            report = this;
            tangon = report.waitFor;
            zuuluu = _closure1_slot12;
            michal = _closure1_slot10;
            entity = _closure1_slot11;
            entity = tangon.bind(report)(zuuluu, michal, entity);
            entity = undefined;
            return entity;
        };
        report['value'] = entity;
        entity = new Array(16);
        entity[0] = report;
        report = {};
        golfie = 'hasChanges';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                entity = _closure1_slot25;
                if(entity) { _fun00030_ip = 14; continue _fun00029 }
 10:
                entity = _closure1_slot26;
 14:
                if(entity) { _fun00030_ip = 21; continue _fun00029 }
 17:
                entity = _closure1_slot29;
 21:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[1] = report;
        report = {};
        golfie = 'getRoleStyleData';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            zuuluu = _closure1_slot33;
            michal = zuuluu.get;
            entity = argFoo;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        report['value'] = golfie;
        entity[2] = report;
        report = {};
        golfie = 'errorMessage';
        report['key'] = golfie;
        golfie = function() { // Original name: get
            entity = _closure1_slot21;
            return entity;
        };
        report['get'] = golfie;
        entity[3] = report;
        report = {};
        golfie = 'hasSortChanges';
        report['key'] = golfie;
        golfie = function() { // Original name: get
            entity = _closure1_slot26;
            return entity;
        };
        report['get'] = golfie;
        entity[4] = report;
        report = {};
        golfie = 'hasRoleConfigurationChanges';
        report['key'] = golfie;
        golfie = function() { // Original name: get
            entity = _closure1_slot29;
            return entity;
        };
        report['get'] = golfie;
        entity[5] = report;
        report = {};
        golfie = 'guild';
        report['key'] = golfie;
        golfie = function() { // Original name: get
            entity = _closure1_slot19;
            return entity;
        };
        report['get'] = golfie;
        entity[6] = report;
        report = {};
        golfie = 'editedRoleIds';
        report['key'] = golfie;
        golfie = function() { // Original name: get
            entity = global;
            zuuluu = entity.Array;
            michal = zuuluu.from;
            entity = _closure1_slot23;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        report['get'] = golfie;
        entity[7] = report;
        report = {};
        golfie = 'editedRoleIdsForConfigurations';
        report['key'] = golfie;
        golfie = function() { // Original name: get
            entity = _closure1_slot30;
            return entity;
        };
        report['get'] = golfie;
        entity[8] = report;
        report = {};
        golfie = 'roles';
        report['key'] = golfie;
        golfie = function() { // Original name: get
            entity = _closure1_slot27;
            return entity;
        };
        report['get'] = golfie;
        entity[9] = report;
        report = {};
        golfie = 'formState';
        report['key'] = golfie;
        golfie = function() { // Original name: get
            entity = _closure1_slot24;
            return entity;
        };
        report['get'] = golfie;
        entity[10] = report;
        report = {};
        golfie = 'getSortDeltas';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            michal = _closure1_slot37;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        };
        report['value'] = golfie;
        entity[11] = report;
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
        entity[12] = report;
        report = {};
        golfie = 'getRole';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            zuuluu = _closure1_slot41;
            michal = undefined;
            entity = argFoo;
            entity = zuuluu.bind(michal)(entity);
            return entity;
        };
        report['value'] = golfie;
        entity[13] = report;
        report = {};
        golfie = 'getPermissionSearchQuery';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = _closure1_slot20;
            return entity;
        };
        report['value'] = golfie;
        entity[14] = report;
        report = {};
        golfie = 'getEditedRoleConnectionConfigurationsMap';
        report['key'] = golfie;
        oscard = function() { // Original name: value
            entity = _closure1_slot32;
            return entity;
        };
        report['value'] = oscard;
        entity[15] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    offset = tangon.bind(entity)(offset);
    tangon = 'GuildSettingsRolesStore';
    offset['displayName'] = tangon;
    tangon = 19;
    tangon = golfie[tangon];
    sizing = verify.bind(entity)(tangon);
    tangon = {};
    romeon = function() { // Original name: GUILD_SETTINGS_ROLES_INIT
        michal = _closure1_slot38;
        entity = undefined;
        michal = michal.bind(entity)();
        return entity;
    };
    tangon['GUILD_SETTINGS_ROLES_INIT'] = romeon;
    tangon['GUILD_SETTINGS_INIT'] = yankee;
    tangon['GUILD_SETTINGS_SET_SECTION'] = yankee;
    yankee = function(argFoo) { // Original name: handleSortUpdate
        _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
            entity = argFoo;
            tangon = entity.roles;
            zuuluu = _closure1_slot27;
            entity = null;
            if(!(entity != zuuluu)) { _fun00032_ip = 40; continue _fun00031 }
 22:
            zuuluu = tangon.length;
            entity = _closure1_slot27;
            entity = entity.length;
            if(!(zuuluu === entity)) { _fun00032_ip = 117; continue _fun00031 }
 40:
            zuuluu = tangon.map;
            entity = function(argFoo) {
                zuuluu = _closure1_slot41;
                michal = undefined;
                entity = argFoo;
                entity = zuuluu.bind(michal)(entity);
                return entity;
            };
            report = zuuluu.bind(tangon)(entity);
            tangon = report.filter;
            oscard = _closure1_slot0;
            zuuluu = _closure1_slot3;
            entity = 13;
            zuuluu = zuuluu[entity];
            entity = undefined;
            zuuluu = oscard.bind(entity)(zuuluu);
            zuuluu = zuuluu.isNotNullish;
            zuuluu = tangon.bind(report)(zuuluu);
            _closure1_slot27 = zuuluu;
            zuuluu = true;
            _closure1_slot26 = zuuluu;
            michal = _closure1_slot34;
            michal = michal.bind(entity)();
            return entity;
 117:
            entity = false;
            return entity;
        }
    };
    tangon['GUILD_SETTINGS_ROLES_SORT_UPDATE'] = yankee;
    yankee = function(argFoo) { // Original name: handleUpdatePermissions
        _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
            entity = argFoo;
            michal = entity.id;
            verify = entity.flag;
            report = entity.allow;
            entity = _closure1_slot41;
            tangon = undefined;
            zuuluu = entity.bind(tangon)(michal);
            entity = null;
            if(!(entity != zuuluu)) { _fun00034_ip = 113; continue _fun00033 }
 40:
            option = zuuluu.permissions;
            michal = _closure1_slot40;
            entity = {};
            golfie = _closure1_slot2;
            offset = _closure1_slot3;
            oscard = 14;
            oscard = offset[oscard];
            golfie = golfie.bind(tangon)(oscard);
            if(report) { _fun00034_ip = 89; continue _fun00033 }
 75:
            report = golfie.remove;
            report = report.bind(golfie)(option, verify);
            _fun00034_ip = 100; continue _fun00033;
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
    tangon['GUILD_SETTINGS_ROLES_UPDATE_PERMISSIONS'] = yankee;
    yankee = function(argFoo) { // Original name: handleUpdatePermissionSet
        _fun00035: for(var _fun00036_ip = 0; ; ) switch(_fun00036_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.id;
            oscard = entity.permissions;
            entity = _closure1_slot41;
            report = undefined;
            tangon = entity.bind(report)(zuuluu);
            entity = null;
            entity = entity != tangon;
            if(!entity) { _fun00036_ip = 54; continue _fun00035 }
 37:
            zuuluu = _closure1_slot40;
            michal = {};
            michal['permissions'] = oscard;
            entity = zuuluu.bind(report)(tangon, michal);
 54:
            return entity;
        }
    };
    tangon['GUILD_SETTINGS_ROLES_UPDATE_PERMISSION_SET'] = yankee;
    yankee = function(argFoo) { // Original name: handleClearRolePermissions
        _fun00037: for(var _fun00038_ip = 0; ; ) switch(_fun00038_ip) {
 0:
            entity = argFoo;
            michal = entity.id;
            entity = _closure1_slot41;
            report = undefined;
            tangon = entity.bind(report)(michal);
            entity = null;
            entity = entity != tangon;
            if(!entity) { _fun00038_ip = 74; continue _fun00037 }
 31:
            zuuluu = _closure1_slot40;
            michal = {};
            golfie = _closure1_slot2;
            option = _closure1_slot3;
            oscard = 15;
            oscard = option[oscard];
            oscard = golfie.bind(report)(oscard);
            oscard = oscard.NONE;
            michal['permissions'] = oscard;
            entity = zuuluu.bind(report)(tangon, michal);
 74:
            return entity;
        }
    };
    tangon['GUILD_SETTINGS_ROLES_CLEAR_PERMISSIONS'] = yankee;
    yankee = function(argFoo) { // Original name: handleUpdateName
        _fun00039: for(var _fun00040_ip = 0; ; ) switch(_fun00040_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.id;
            oscard = entity.name;
            entity = _closure1_slot41;
            report = undefined;
            tangon = entity.bind(report)(zuuluu);
            entity = null;
            entity = entity != tangon;
            if(!entity) { _fun00040_ip = 52; continue _fun00039 }
 36:
            zuuluu = _closure1_slot40;
            michal = {};
            michal['name'] = oscard;
            entity = zuuluu.bind(report)(tangon, michal);
 52:
            return entity;
        }
    };
    tangon['GUILD_SETTINGS_ROLES_UPDATE_NAME'] = yankee;
    yankee = function(argFoo) { // Original name: handleUpdateDescription
        _fun00041: for(var _fun00042_ip = 0; ; ) switch(_fun00042_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.id;
            oscard = entity.description;
            entity = _closure1_slot41;
            report = undefined;
            tangon = entity.bind(report)(zuuluu);
            entity = null;
            entity = entity != tangon;
            if(!entity) { _fun00042_ip = 52; continue _fun00041 }
 36:
            zuuluu = _closure1_slot40;
            michal = {};
            michal['description'] = oscard;
            entity = zuuluu.bind(report)(tangon, michal);
 52:
            return entity;
        }
    };
    tangon['GUILD_SETTINGS_ROLES_UPDATE_DESCRIPTION'] = yankee;
    yankee = function(argFoo) { // Original name: handleUpdateColor
        _fun00043: for(var _fun00044_ip = 0; ; ) switch(_fun00044_ip) {
 0:
            entity = argFoo;
            yankee = entity.id;
            verify = entity.color;
            golfie = null;
            entity = 0;
            option = null;
            if(!(entity !== verify)) { _fun00044_ip = 59; continue _fun00043 }
 23:
            zuuluu = _closure1_slot0;
            michal = _closure1_slot3;
            entity = 16;
            michal = michal[entity];
            entity = undefined;
            michal = zuuluu.bind(entity)(michal);
            entity = michal.int2hex;
            option = entity.bind(michal)(verify);
 59:
            entity = _closure1_slot41;
            report = undefined;
            tangon = entity.bind(report)(yankee);
            if(!(golfie != tangon)) { _fun00044_ip = 250; continue _fun00043 }
 80:
            zuuluu = _closure1_slot33;
            entity = zuuluu.get;
            offset = entity.bind(zuuluu)(yankee);
            entity = golfie != offset;
            if(!entity) { _fun00044_ip = 248; continue _fun00043 }
 104:
            zuuluu = _closure1_slot22;
            zuuluu = zuuluu.SOLID;
            offset['currentStyle'] = zuuluu;
            romeon = offset.styleColors;
            zuuluu = _closure1_slot22;
            oscard = zuuluu.SOLID;
            zuuluu = {};
            zuuluu['primary_color'] = verify;
            zuuluu['secondary_color'] = report;
            zuuluu['tertiary_color'] = report;
            romeon[oscard] = zuuluu;
            oscard = _closure1_slot33;
            zuuluu = oscard.set;
            zuuluu = zuuluu.bind(oscard)(yankee, offset);
            zuuluu = _closure1_slot40;
            michal = {};
            michal['color'] = verify;
            michal['colorString'] = option;
            oscard = {};
            oscard['primary_color'] = verify;
            oscard['secondary_color'] = report;
            oscard['tertiary_color'] = report;
            michal['colors'] = oscard;
            oscard = {};
            verify = golfie != option;
            golfie = undefined;
            if(!verify) { _fun00044_ip = 222; continue _fun00043 }
 219:
            golfie = option;
 222:
            oscard['primaryColor'] = golfie;
            oscard['secondaryColor'] = report;
            oscard['tertiaryColor'] = report;
            michal['colorStrings'] = oscard;
            entity = zuuluu.bind(report)(tangon, michal);
 248:
            return entity;
 250:
            entity = false;
            return entity;
        }
    };
    tangon['GUILD_SETTINGS_ROLES_UPDATE_COLOR'] = yankee;
    yankee = function(argFoo) { // Original name: handleUpdateColors
        _fun00045: for(var _fun00046_ip = 0; ; ) switch(_fun00046_ip) {
 0:
            entity = argFoo;
            yankee = entity.id;
            golfie = entity.colors;
            zuuluu = entity.currentStyle;
            entity = _closure1_slot41;
            report = undefined;
            tangon = entity.bind(report)(yankee);
            verify = null;
            if(!(verify != tangon)) { _fun00046_ip = 184; continue _fun00045 }
 42:
            oscard = _closure1_slot0;
            option = _closure1_slot3;
            entity = 17;
            entity = option[entity];
            oscard = oscard.bind(report)(entity);
            entity = oscard.extractColorStringsFromServerColors;
            oscard = entity.bind(oscard)(golfie);
            option = _closure1_slot33;
            entity = option.get;
            offset = entity.bind(option)(yankee);
            entity = verify != offset;
            if(!entity) { _fun00046_ip = 182; continue _fun00045 }
 94:
            option = offset.styleColors;
            option[zuuluu] = golfie;
            offset['currentStyle'] = zuuluu;
            option = _closure1_slot33;
            zuuluu = option.set;
            zuuluu = zuuluu.bind(option)(yankee, offset);
            zuuluu = _closure1_slot40;
            michal = {};
            option = golfie.primary_color;
            verify = verify != option;
            option = undefined;
            if(!verify) { _fun00046_ip = 152; continue _fun00045 }
 146:
            option = golfie.primary_color;
 152:
            michal['color'] = option;
            michal['colors'] = golfie;
            golfie = oscard.primaryColor;
            michal['colorString'] = golfie;
            michal['colorStrings'] = oscard;
            entity = zuuluu.bind(report)(tangon, michal);
 182:
            return entity;
 184:
            entity = false;
            return entity;
        }
    };
    tangon['GUILD_SETTINGS_ROLES_UPDATE_COLORS'] = yankee;
    yankee = function(argFoo) { // Original name: handleUpdateSettings
        _fun00047: for(var _fun00048_ip = 0; ; ) switch(_fun00048_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.id;
            golfie = entity.hoist;
            oscard = entity.mentionable;
            entity = _closure1_slot41;
            report = undefined;
            tangon = entity.bind(report)(zuuluu);
            entity = null;
            entity = entity != tangon;
            if(!entity) { _fun00048_ip = 65; continue _fun00047 }
 43:
            zuuluu = _closure1_slot40;
            michal = {};
            michal['hoist'] = golfie;
            michal['mentionable'] = oscard;
            entity = zuuluu.bind(report)(tangon, michal);
 65:
            return entity;
        }
    };
    tangon['GUILD_SETTINGS_ROLES_UPDATE_SETTINGS'] = yankee;
    yankee = function(argFoo) { // Original name: handleUpdateRoleIcon
        _fun00049: for(var _fun00050_ip = 0; ; ) switch(_fun00050_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.id;
            golfie = entity.icon;
            oscard = entity.unicodeEmoji;
            entity = _closure1_slot41;
            report = undefined;
            tangon = entity.bind(report)(zuuluu);
            entity = null;
            entity = entity != tangon;
            if(!entity) { _fun00050_ip = 63; continue _fun00049 }
 42:
            zuuluu = _closure1_slot40;
            michal = {};
            michal['icon'] = golfie;
            michal['unicodeEmoji'] = oscard;
            entity = zuuluu.bind(report)(tangon, michal);
 63:
            return entity;
        }
    };
    tangon['GUILD_SETTINGS_ROLES_UPDATE_ROLE_ICON'] = yankee;
    yankee = function(argFoo) { // Original name: handleInsertRole
        _fun00051: for(var _fun00052_ip = 0; ; ) switch(_fun00052_ip) {
 0:
            entity = argFoo;
            tangon = entity.role;
            michal = entity.searchQuery;
            var _closure1_slot20 = michal;
            report = null;
            if(!(report != tangon)) { _fun00052_ip = 101; continue _fun00051 }
 28:
            oscard = _closure1_slot41;
            zuuluu = tangon.id;
            michal = undefined;
            zuuluu = oscard.bind(michal)(zuuluu);
            if(!(report != zuuluu)) { _fun00052_ip = 60; continue _fun00051 }
 48:
            zuuluu = _closure1_slot40;
            zuuluu = zuuluu.bind(michal)(tangon, tangon);
            _fun00052_ip = 101; continue _fun00051;
 60:
            option = _closure1_slot27;
            zuuluu = new Array(1);
            golfie = 0;
            verify = zuuluu;
            report = arraySpread(verify, option, golfie);
            zuuluu[report] = tangon;
            tangon = 1;
            tangon = report + tangon;
            _closure1_slot27 = zuuluu;
            entity = _closure1_slot34;
            entity = entity.bind(michal)();
 101:
            entity = undefined;
            return entity;
        }
    };
    tangon['GUILD_SETTINGS_ROLE_SELECT'] = yankee;
    yankee = function(argFoo) { // Original name: handleRoleStyleUpdate
        _fun00053: for(var _fun00054_ip = 0; ; ) switch(_fun00054_ip) {
 0:
            entity = argFoo;
            offset = entity.id;
            report = entity.currentStyle;
            michal = _closure1_slot41;
            tangon = undefined;
            zuuluu = michal.bind(tangon)(offset);
            golfie = null;
            if(!(golfie != zuuluu)) { _fun00054_ip = 192; continue _fun00053 }
 37:
            oscard = _closure1_slot33;
            michal = oscard.get;
            michal = michal.bind(oscard)(offset);
            if(!(golfie != michal)) { _fun00054_ip = 188; continue _fun00053 }
 58:
            verify = _closure1_slot33;
            option = verify.set;
            oscard = {};
            oscard['currentStyle'] = report;
            yankee = michal.styleColors;
            oscard['styleColors'] = yankee;
            oscard = option.bind(verify)(offset, oscard);
            michal = michal.styleColors;
            oscard = michal[report];
            report = _closure1_slot0;
            option = _closure1_slot3;
            michal = 17;
            michal = option[michal];
            report = report.bind(tangon)(michal);
            michal = report.extractColorStringsFromServerColors;
            report = michal.bind(report)(oscard);
            michal = _closure1_slot40;
            entity = {};
            option = oscard.primary_color;
            verify = golfie != option;
            golfie = undefined;
            if(!verify) { _fun00054_ip = 156; continue _fun00053 }
 153:
            golfie = option;
 156:
            entity['color'] = golfie;
            entity['colors'] = oscard;
            oscard = report.primaryColor;
            entity['colorString'] = oscard;
            entity['colorStrings'] = report;
            entity = michal.bind(tangon)(zuuluu, entity);
            return entity;
 188:
            entity = false;
            return entity;
 192:
            entity = false;
            return entity;
        }
    };
    tangon['GUILD_SETTINGS_ROLES_ROLE_STYLE_UPDATE'] = yankee;
    yankee = function(argFoo) { // Original name: handleFetchRoleConnectionConfigurations
        _fun00055: for(var _fun00056_ip = 0; ; ) switch(_fun00056_ip) {
 0:
            entity = argFoo;
            tangon = entity.roleId;
            oscard = entity.roleConnectionConfigurations;
            zuuluu = _closure1_slot41;
            entity = undefined;
            zuuluu = zuuluu.bind(entity)(tangon);
            tangon = null;
            if(!(tangon != zuuluu)) { _fun00056_ip = 143; continue _fun00055 }
 35:
            golfie = _closure1_slot31;
            report = golfie.get;
            tangon = zuuluu.id;
            golfie = report.bind(golfie)(tangon);
            report = _closure1_slot1;
            option = _closure1_slot3;
            tangon = 11;
            tangon = option[tangon];
            report = report.bind(entity)(tangon);
            tangon = report.isEqual;
            tangon = tangon.bind(report)(golfie, oscard);
            if(tangon) { _fun00056_ip = 139; continue _fun00055 }
 89:
            golfie = _closure1_slot32;
            report = golfie.set;
            tangon = zuuluu.id;
            tangon = report.bind(golfie)(tangon, oscard);
            report = _closure1_slot31;
            tangon = report.set;
            zuuluu = zuuluu.id;
            zuuluu = tangon.bind(report)(zuuluu, oscard);
            michal = _closure1_slot34;
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
    tangon['GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS'] = yankee;
    yankee = function(argFoo) { // Original name: handleUpdateRoleConnectionConfigurations
        _fun00057: for(var _fun00058_ip = 0; ; ) switch(_fun00058_ip) {
 0:
            entity = argFoo;
            tangon = entity.roleId;
            oscard = entity.roleConnectionConfigurations;
            zuuluu = _closure1_slot41;
            entity = undefined;
            zuuluu = zuuluu.bind(entity)(tangon);
            tangon = null;
            if(!(tangon != zuuluu)) { _fun00058_ip = 90; continue _fun00057 }
 35:
            tangon = true;
            _closure1_slot29 = tangon;
            golfie = _closure1_slot30;
            report = golfie.add;
            tangon = zuuluu.id;
            tangon = report.bind(golfie)(tangon);
            report = _closure1_slot32;
            tangon = report.set;
            zuuluu = zuuluu.id;
            zuuluu = tangon.bind(report)(zuuluu, oscard);
            michal = _closure1_slot34;
            michal = michal.bind(entity)();
            return entity;
 90:
            entity = false;
            return entity;
        }
    };
    tangon['GUILD_SETTINGS_ROLES_UPDATE_ROLE_CONNECTION_CONFIGURATIONS'] = yankee;
    yankee = function() { // Original name: handleClose
        entity = null;
        _closure1_slot19 = entity;
        entity = new Array(0);
        _closure1_slot27 = entity;
        _closure1_slot28 = entity;
        zuuluu = _closure1_slot31;
        entity = zuuluu.clear;
        entity = entity.bind(zuuluu)();
        zuuluu = _closure1_slot23;
        entity = zuuluu.clear;
        entity = entity.bind(zuuluu)();
        zuuluu = _closure1_slot33;
        entity = zuuluu.clear;
        entity = entity.bind(zuuluu)();
        zuuluu = _closure1_slot32;
        entity = zuuluu.clear;
        entity = entity.bind(zuuluu)();
        entity = global;
        entity = entity.Set;
        zuuluu = entity.prototype;
        zuuluu = Object.create(zuuluu, {constructor: {value: entity}});
        tangon = zuuluu;
        entity = new tangon[entity](zuuluu);
        entity = entity instanceof Object ? entity : zuuluu;
        _closure1_slot30 = entity;
        entity = false;
        _closure1_slot25 = entity;
        _closure1_slot26 = entity;
        _closure1_slot29 = entity;
        entity = _closure1_slot14;
        entity = entity.CLOSED;
        _closure1_slot24 = entity;
        entity = undefined;
        return entity;
    };
    tangon['GUILD_SETTINGS_CLOSE'] = yankee;
    tangon['GUILD_ROLE_CREATE'] = option;
    tangon['GUILD_ROLE_UPDATE'] = option;
    option = function(argFoo) { // Original name: handleRoleDelete
        _fun00059: for(var _fun00060_ip = 0; ; ) switch(_fun00060_ip) {
 0:
            zuuluu = argFoo;
            report = _closure1_slot30;
            tangon = report.has;
            michal = zuuluu.roleId;
            michal = tangon.bind(report)(michal);
            if(!michal) { _fun00060_ip = 95; continue _fun00059 }
 29:
            report = _closure1_slot30;
            tangon = report.delete;
            michal = zuuluu.roleId;
            michal = tangon.bind(report)(michal);
            report = _closure1_slot31;
            tangon = report.delete;
            michal = zuuluu.roleId;
            michal = tangon.bind(report)(michal);
            report = _closure1_slot32;
            tangon = report.delete;
            michal = zuuluu.roleId;
            michal = tangon.bind(report)(michal);
            michal = false;
            _closure1_slot29 = michal;
 95:
            michal = _closure1_slot42;
            entity = undefined;
            entity = michal.bind(entity)(zuuluu);
            return entity;
        }
    };
    tangon['GUILD_ROLE_DELETE'] = option;
    option = function() { // Original name: handleSubmitting
        entity = _closure1_slot14;
        entity = entity.SUBMITTING;
        _closure1_slot24 = entity;
        entity = undefined;
        return entity;
    };
    tangon['GUILD_SETTINGS_ROLES_SUBMITTING'] = option;
    option = function(argFoo) { // Original name: handleSaveFail
        entity = argFoo;
        michal = entity.message;
        zuuluu = _closure1_slot14;
        zuuluu = zuuluu.OPEN;
        _closure1_slot24 = zuuluu;
        _closure1_slot21 = michal;
        entity = undefined;
        return entity;
    };
    tangon['GUILD_SETTINGS_ROLES_SAVE_FAIL'] = option;
    option = function() { // Original name: handleSaveSuccess
        zuuluu = _closure1_slot38;
        entity = undefined;
        michal = false;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    tangon['GUILD_SETTINGS_ROLES_SAVE_SUCCESS'] = option;
    option = function(argFoo) { // Original name: handlePinPermissionMigrated
        _fun00061: for(var _fun00062_ip = 0; ; ) switch(_fun00062_ip) {
 0:
            entity = argFoo;
            tangon = entity.guildId;
            zuuluu = _closure1_slot19;
            entity = null;
            entity = entity != zuuluu;
            if(!entity) { _fun00062_ip = 37; continue _fun00061 }
 24:
            zuuluu = _closure1_slot19;
            zuuluu = zuuluu.id;
            entity = tangon === zuuluu;
 37:
            if(!entity) { _fun00062_ip = 131; continue _fun00061 }
 40:
            oscard = _closure1_slot9;
            report = _closure1_slot19;
            tangon = report.features;
            zuuluu = tangon.union;
            entity = global;
            option = entity.Set;
            entity = _closure1_slot16;
            golfie = entity.PIN_PERMISSION_MIGRATION_COMPLETE;
            entity = new Array(1);
            entity[0] = golfie;
            golfie = option.prototype;
            golfie = Object.create(golfie, {constructor: {value: option}});
            romeon = golfie;
            yankee = entity;
            entity = new romeon[option](yankee, offset);
            entity = entity instanceof Object ? entity : golfie;
            tangon = zuuluu.bind(tangon)(entity);
            zuuluu = undefined;
            entity = 'features';
            entity = oscard.bind(zuuluu)(report, entity, tangon);
            _closure1_slot19 = entity;
 131:
            entity = undefined;
            return entity;
        }
    };
    tangon['GUILD_SETTINGS_PIN_PERMISSION_MIGRATED'] = option;
    option = offset.prototype;
    option = Object.create(option, {constructor: {value: offset}});
    output = option;
    kiloes = tangon;
    tangon = new output[offset](sizing, kiloes, backup);
    tangon = tangon instanceof Object ? tangon : option;
    var _closure1_slot35 = tangon;
    report = 20;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/guild_settings/GuildSettingsRolesStore.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['default'] = tangon;
    zuuluu['RoleColorsStyle'] = michal;
    return entity;
})();