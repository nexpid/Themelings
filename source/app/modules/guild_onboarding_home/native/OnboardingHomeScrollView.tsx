// app/modules/guild_onboarding_home/native/OnboardingHomeScrollView.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    yankee = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = yankee;
    var _closure1_slot1 = oscard;
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
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.ScrollView;
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot4 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    option = report.bind(entity)(tangon);
    golfie = option.createStyles;
    tangon = {};
    verify = {};
    offset = 4;
    offset = oscard[offset];
    offset = yankee.bind(entity)(offset);
    offset = offset.colors;
    offset = offset.BACKGROUND_SECONDARY;
    verify['backgroundColor'] = offset;
    tangon['guildFeedBackground'] = verify;
    tangon = golfie.bind(option)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/guild_onboarding_home/native/OnboardingHomeScrollView.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: OnboardingHomeScrollView
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.guildId;
            michal = entity.headerOffset;
            tangon = undefined;
            if(!(michal === tangon)) { _fun00002_ip = 26; continue _fun00001 }
 24:
            michal = 0;
 26:
            var _closure2_slot0 = michal;
            report = entity.scrollValue;
            var _closure2_slot1 = report;
            report = entity.children;
            var _closure2_slot2 = tangon;
            var _closure2_slot3 = tangon;
            var _closure2_slot4 = tangon;
            var _closure2_slot5 = tangon;
            oscard = _closure1_slot5;
            golfie = oscard.bind(tangon)();
            offset = _closure1_slot2;
            verify = offset.useRef;
            oscard = false;
            oscard = verify.bind(offset)(oscard);
            _closure2_slot2 = oscard;
            verify = offset.useRef;
            oscard = null;
            verify = verify.bind(offset)(oscard);
            _closure2_slot3 = verify;
            yankee = _closure1_slot0;
            romeon = _closure1_slot1;
            oscard = 5;
            oscard = romeon[oscard];
            oscard = yankee.bind(tangon)(oscard);
            oscard = oscard.bind(tangon)();
            yankee = oscard.bottom;
            _closure2_slot4 = yankee;
            foxtra = offset.useEffect;
            romeon = new Array(1);
            romeon[0] = zuuluu;
            oscard = function() {
                michal = _closure2_slot2;
                entity = false;
                michal['current'] = entity;
                entity = undefined;
                return entity;
            };
            oscard = foxtra.bind(offset)(oscard, romeon);
            romeon = offset.useRef;
            oscard = true;
            oscard = romeon.bind(offset)(oscard);
            _closure2_slot5 = oscard;
            romeon = offset.useEffect;
            oscard = new Array(1);
            oscard[0] = zuuluu;
            zuuluu = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    michal = _closure2_slot3;
                    zuuluu = michal.current;
                    michal = null;
                    michal = michal == zuuluu;
                    if(michal) { _fun00004_ip = 30; continue _fun00003 }
 21:
                    zuuluu = _closure2_slot5;
                    michal = zuuluu.current;
 30:
                    if(michal) { _fun00004_ip = 67; continue _fun00003 }
 33:
                    michal = _closure2_slot3;
                    tangon = michal.current;
                    zuuluu = tangon.scrollTo;
                    michal = {'animated': false, 'y': 0};
                    michal = zuuluu.bind(tangon)(michal);
 67:
                    michal = _closure2_slot5;
                    entity = false;
                    michal['current'] = entity;
                    entity = undefined;
                    return entity;
                }
            };
            zuuluu = romeon.bind(offset)(zuuluu, oscard);
            oscard = offset.useMemo;
            zuuluu = new Array(2);
            zuuluu[0] = yankee;
            zuuluu[1] = michal;
            michal = function() {
                entity = {};
                tangon = _closure2_slot4;
                zuuluu = 16;
                zuuluu = zuuluu + tangon;
                entity['paddingBottom'] = zuuluu;
                michal = _closure2_slot0;
                entity['marginTop'] = michal;
                return entity;
            };
            oscard = oscard.bind(offset)(michal, zuuluu);
            zuuluu = _closure1_slot4;
            michal = _closure1_slot3;
            entity = {};
            entity['ref'] = verify;
            verify = {};
            offset = 1;
            verify['right'] = offset;
            entity['scrollIndicatorInsets'] = verify;
            option = function(argFoo) { // Original name: onScroll
                entity = argFoo;
                entity = entity.nativeEvent;
                entity = entity.contentOffset;
                zuuluu = entity.y;
                michal = _closure2_slot1;
                entity = michal.set;
                entity = entity.bind(michal)(zuuluu);
                entity = undefined;
                return entity;
            };
            entity['onScroll'] = option;
            option = 16;
            entity['scrollEventThrottle'] = option;
            golfie = golfie.guildFeedBackground;
            entity['style'] = golfie;
            entity['contentContainerStyle'] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();