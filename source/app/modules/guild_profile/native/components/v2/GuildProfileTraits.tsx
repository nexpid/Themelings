// app/modules/guild_profile/native/components/v2/GuildProfileTraits.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    yankee = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = yankee;
    var _closure1_slot2 = oscard;
    entity = function(argFoo) { // Original name: TraitEmoji
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.emoji;
            entity = null;
            if(!(entity != zuuluu)) { _fun00002_ip = 189; continue _fun00001 }
 18:
            michal = zuuluu.id;
            michal = entity != michal;
            report = undefined;
            golfie = undefined;
            if(!michal) { _fun00002_ip = 97; continue _fun00001 }
 34:
            tangon = _closure1_slot1;
            oscard = _closure1_slot2;
            michal = 5;
            michal = oscard[michal];
            oscard = tangon.bind(report)(michal);
            tangon = oscard.getEmojiURL;
            michal = {};
            option = zuuluu.id;
            michal['id'] = option;
            option = zuuluu.animated;
            michal['animated'] = option;
            option = 16;
            michal['size'] = option;
            golfie = tangon.bind(oscard)(michal);
 97:
            oscard = _closure1_slot1;
            option = _closure1_slot2;
            tangon = 6;
            tangon = option[tangon];
            oscard = oscard.bind(report)(tangon);
            tangon = oscard.isCustomEmoji;
            tangon = tangon.bind(oscard)(zuuluu);
            if(tangon) { _fun00002_ip = 141; continue _fun00001 }
 134:
            oscard = zuuluu.surrogates;
            _fun00002_ip = 146; continue _fun00001;
 141:
            oscard = zuuluu.name;
 146:
            tangon = _closure1_slot5;
            zuuluu = _closure1_slot1;
            option = _closure1_slot2;
            michal = 7;
            michal = option[michal];
            zuuluu = zuuluu.bind(report)(michal);
            michal = {};
            michal['src'] = golfie;
            michal['name'] = oscard;
            michal = tangon.bind(report)(zuuluu, michal);
            return michal;
 189:
            return entity;
        }
    };
    var _closure1_slot8 = entity;
    entity = function(argFoo) { // Original name: GuildProfileTraitView
        entity = argFoo;
        verify = entity.trait;
        entity = _closure1_slot7;
        tangon = undefined;
        report = entity.bind(tangon)();
        zuuluu = _closure1_slot6;
        michal = _closure1_slot4;
        entity = {};
        report = report.trait;
        entity['style'] = report;
        option = _closure1_slot5;
        golfie = _closure1_slot8;
        report = {};
        offset = verify.emoji;
        report['emoji'] = offset;
        golfie = option.bind(tangon)(golfie, report);
        report = new Array(2);
        report[0] = golfie;
        option = _closure1_slot5;
        golfie = _closure1_slot0;
        offset = _closure1_slot2;
        oscard = 8;
        oscard = offset[oscard];
        oscard = golfie.bind(tangon)(oscard);
        golfie = oscard.Text;
        oscard = {'variant': 'text-sm/medium', 'color': 'text-normal'};
        verify = verify.label;
        oscard['children'] = verify;
        oscard = option.bind(tangon)(golfie, oscard);
        report[1] = oscard;
        entity['children'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    var _closure1_slot9 = entity;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    golfie = oscard[entity];
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.View;
    var _closure1_slot4 = tangon;
    tangon = 2;
    golfie = oscard[tangon];
    golfie = report.bind(entity)(golfie);
    golfie = golfie.jsx;
    var _closure1_slot5 = golfie;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsxs;
    var _closure1_slot6 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    option = report.bind(entity)(tangon);
    golfie = option.createStyles;
    tangon = {};
    verify = {'display': 'flex', 'flexDirection': 'row', 'flexWrap': 'wrap', 'gap': 8};
    tangon['container'] = verify;
    verify = {'display': 'flex', 'flexDirection': 'row', 'gap': 4, 'alignItems': 'center', 'paddingHorizontal': 8, 'paddingVertical': 4, 'borderRadius': null, 'borderWidth': 1, 'borderStyle': 'solid'};
    offset = 4;
    romeon = oscard[offset];
    romeon = yankee.bind(entity)(romeon);
    romeon = romeon.radii;
    romeon = romeon.lg;
    verify['borderRadius'] = romeon;
    offset = oscard[offset];
    offset = yankee.bind(entity)(offset);
    offset = offset.colors;
    offset = offset.BORDER_SUBTLE;
    verify['borderColor'] = offset;
    tangon['trait'] = verify;
    tangon = golfie.bind(option)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 9;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/guild_profile/native/components/v2/GuildProfileTraits.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: GuildProfileTraits
        entity = argFoo;
        michal = entity.profile;
        var _closure2_slot0 = michal;
        zuuluu = _closure1_slot7;
        tangon = undefined;
        oscard = zuuluu.bind(tangon)();
        option = _closure1_slot3;
        golfie = option.useMemo;
        zuuluu = new Array(1);
        zuuluu[0] = michal;
        michal = function() {
            michal = _closure2_slot0;
            tangon = michal.traits;
            zuuluu = tangon.map;
            michal = function(argFoo, argBar) {
                entity = {};
                michal = global;
                michal = michal.HermesInternal;
                tangon = michal.concat;
                zuuluu = 'trait-';
                michal = argBar;
                michal = tangon.bind(zuuluu)(michal);
                entity['key'] = michal;
                report = argFoo;
                oscard = entity;
                michal = copyDataProperties(oscard, report);
                return entity;
            };
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = zuuluu.filter;
            entity = function(argFoo) {
                entity = argFoo;
                entity = entity.label;
                michal = entity.length;
                entity = 0;
                entity = michal > entity;
                return entity;
            };
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        golfie = golfie.bind(option)(michal, zuuluu);
        zuuluu = _closure1_slot5;
        michal = _closure1_slot4;
        entity = {};
        oscard = oscard.container;
        entity['style'] = oscard;
        oscard = golfie.map;
        report = function(argFoo) {
            entity = argFoo;
            report = _closure1_slot5;
            tangon = _closure1_slot9;
            zuuluu = {};
            zuuluu['trait'] = entity;
            michal = entity.key;
            entity = undefined;
            entity = report.bind(entity)(tangon, zuuluu, michal);
            return entity;
        };
        report = oscard.bind(golfie)(report);
        entity['children'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    zuuluu['default'] = michal;
    return entity;
})();