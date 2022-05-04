# 커스텀UI 컴포넌트 모음

### User Input
- [ ] Select button
- [ ] Toggle(on-off)
- [ ] Time-set Input
- [ ] Date-set Input (Spinner)
- [ ] Number Input 
- [ ] Color Input
- [ ] Check Box
- [ ] Slide Bar
- [ ] Radio Input
- [ ] Image File uploader Input
- [ ] Combo Box(dropdown + input)

### Menu
- [ ] Drop-down Menu
- [ ] Mega Drop-down Menu
- [ ] Tear-off Menu

### the Others
- [ ] Table
- [ ] BlockQuote
- [ ] Audio
- [ ] Video


<br/>
<br/> 

# 모르면 곤란한 UI 컴포넌트 용어

## Navigations

메뉴를 묶어놓은 영역. 이 메뉴를 통해 다른 페이지로 오갈 수 있음

### GNB (Global Navigation Bar) 

언제 어디서든 접근할 수 있는 대부분 최상단에 고정된 네비게이션바.

### LNB (Local Navigation Bar)

선택된 메뉴에 따라 표시되는 세부 내비게이션

### SNB (Side Navagation Bar)

LNB의 한 종류. 화면 한쪽 구석을 차지함.

### FNB (Footer Navagation Bar) 

= footer

---

## 사용자 입력 관련

### Radio Button, Check Box, Toggle 

- 라디오버튼 : 여러 개 중 ‘한 가지’ 옵션 선택
- 체크박스: ‘여러 개’ 옵션 선택
- 토글 : 상태를 on, off 형식으로 전환 (ex 아이폰 모드 설정, 해제)
- 구현방법
    
    ```html
    <input type="radio" />
    <input type="checkbox" />
    
    토글은 좀 까다로움. 
    ```
    

### Combo Box

콤보박스는 dropdown 리스트 + 입력 필드.

선택지로 고를 수도 있고, 입력 필드에 직접 값을 입력할 수 있다.

폰트 선택할 때나 수량 선택처럼 자세하고 명확한 값을 요구할 때 사용하면 좋음

선택지가 매우 많을 경우 텍스트를 입력하여 선택지를 찾아 선택하는 방식으로도 활용가능 

bread makes our lives happier

### Spinner

대표적인 숫자 입력 컨트롤. 

입력필드 + 작은 위아래 화살표로 구성. :단순한 숫자입력

날짜 입력의 경우 년, 월, 일을 돌려가며 선택가능

### Dial

= Knob이라고도 불림. ‘스큐어모피즘’의 좋은 예시

원에서 다이얼을 잡고 원하는 수치만큼 돌려서 값을 조정한다.

### Slider

이 또한 스큐어모피즘의 예. 

콤보박스는 사용자가 선택가능한 최대 최소 범위를 알 수 없지만, 슬라이더는 입력 값이 제한되어있음을 시각적으로 인지할 수 있다. = 매우 직관적.

⇒ 사용자가 부적절한 값을 입력할 가능성이 없음.

값 조작도 매우 직관적이라 사용자가 유연하게 조작하면서 변화를 감지하는 곳에 사용할 때 효과적.

주로 볼륨 조절, 영상 재생 바, 밝기 조절에 사용 됨

## Menu

### Butcon / Tool bar

Button + Icon이 조합된 단어. 아이콘 형태의 버튼. 이는 툴바에서 가장 많이 사용된다. 

tool bar : 일러, 포토샵에서 사용자들이 사용하는 기능들을 모아둔 바 형태의 공간.

### Tooltip 

버튼 등에 마우스 호버시 1-2초 뒤 나타나는 안내 메시지. 

모바일에서는 hover사용이 제한되기 때문에 애매한 아이콘은 툴팁보단 텍스트와 함께 사용하는 것이 좋다. 

게임에서 아이템의 효과 및 지속시간 등을 설명하기 위해 적극적으로 툴팁을 사용함.

### Drop-down Menu = pull-down menu

드랍다운 리스트와 비슷하게 아래로 쏟아지는 메뉴. 가장 일반적인 메뉴 형식.

메뉴 제목을 선택하면, 하위 메뉴가 아래로 쏟아지는 형태. 

최근에는 Mega Menu형태로 많이 사용됨.

### Mega Drop-down Menu

드롭다운 메뉴의 확장판. 일반적 메뉴보다 훨씬 더 많은 메뉴 표시

카테고리, 메뉴구조가 복잡한 쇼핑몰 같은 서비스에서 많이 사용.

메뉴를 명확히 분리해서 사용자가 많은 선택지에서 헤매지 않게 하는 것이 중요.

### Context-sensitive Navigation

특정 상황에 반응하여 제공되는 기능. 특정 상황에 맞는 메뉴를 보여준다는 점에서 context menu와 비슷하지만, 팝업 형태가 아닌 다양한 형태로 기능을 제공한다.

ex) 메일 리스트에서 체크박스를 눌렀을 때 활성화되는 이동, 휴지통 덩의 버튼들.

핀터레스트 이미지 호버시 나타나는 저장, 공유버튼

- 포인트는 상황에 맞는 기능을 제공하는 것.

### Ribbon Menu

드롭다운 메뉴를 보완하기 위해 만들어진 메뉴. 탭 + 툴바의 형태로, 탭을 번갈아가며 다양한 메뉴 확인할 수 있다. MS office 프로그램들의 상단에서 사용함.

### Tree Menu

계층 구조 파악에 특화된 형태. 주로 탐색기에서 쓰임. 메뉴 구조가 복잡하거나, 구조도를 명확히 파악해야 할 때 사용함.

vscode의 디렉토리 구조 보여주는 부분.

### Context Menu

말 그대로 맥락에 맞는 메뉴를 보여줌.

ex) 오른쪽 클릭 시 나타나는 옵션들 : 포인터가 위치한 요소에 따라 메뉴가 달라짐

### MRU (Most Recently Used)

사용자가 가장 최근에 선택한 내용 또는 옵션을 선별하여 보여줌.

ex) 최근 사용한 이모지 목록들

### Adaptive Menu

MRU를 메뉴에 적용한 방식. 많이 선택하는 메뉴 항목을 우선적으로 나타나도록 메뉴구성.

현재는 잘 사용되지 않음.

### Tear-off Menju

떼어내어 임의의 장소에 배치할 수 있는 메뉴.

ex) 어도비 일러스트레이터나 포토샵에서 여러 탭들을 따로 분리하고 합칠 수 있음

---

### Dialog Box = 대화상자

팝업이라는 용어로도 불리지만, 대화상자는 팝업의 한 종류임.

일반적인 팝업보다는 중요한 메시지를 담고 있다.

dialog, 즉 컴퓨터 혹은 스마트폰과 사용자 사이 대화를 제공하는 박스.

지시사항, 결정해야하는 사항 등을 묻기위해 사용자의 업무를 잠시 멈추고 대화 상자를 팝업한다.

주로

- 오류와 같은 중요 공지,
- 사용자의 결정사항을 묻는 경우,
- 작업의 진행상왕을 알려주는 경우,
- 사용자 선택을 다시 확인해야하는 경우에 사용.

---

## Search

### Incremental Search = Instant Search, Instant Previews

사용되는 의미상 ‘순간 검색’이 더 알맞음.

사용자가 검색어 입력 시 결과물을 예상하고 미리 **결과물**을 노출시킴.

‘자동 완성’과의 차이점 : 단순한 예상가능한 검색어 텍스트를 미리 보여주는 것이 아닌, 검색어의 결과물을 보여줌.

→ 검색에서 발생되는 피로감, 시간을 줄여줌.
